from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from rest_framework.authtoken.views import Token
import requests
import re


#------------------------------------------#
# Model Managers
# -----------------------------------------#
class UserManager(BaseUserManager):
	def validator(self, postData):
		errors = {}
		email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
		if len(postData['name']) < 2:
			errors['name'] = "Name must be at least 2 characters"
		if len(postData['username']) < 5:
			errors['username'] = "Username must be at least 5 characters"
		if self.objects.filter(username = postData['username']):
			errors['username'] = "Username is already in use"
		if not email_regex.match(postData['email']):
			errors['email'] = "Invalid email address"
		if self.objects.filter(email = postData['email']):
			errors['email'] = f"{postData['email']} is already in use"
		if len(postData['pw']) < 8:
			errors['password'] = "Password must be at least 8 characters"
		if postData['pw'] != postData['confirm']:
			errors['password'] = "Passwords do not match"
		return errors

	def update_validator(self, postData):
		errors = {}
		if len(postData['name']) < 2:
			errors['name'] = "Name must be at least 2 characters"
		return errors

	def update_user(self, user, postData, fileData):
		user.name = postData['name']
		user.bg_color = postData['color']
		#if current user image is a default image
		if "default" in user.user_img.url:
			#check if an image was uploaded, and replace if true
			if "img-uploaded" in fileData:
				user.user_img = fileData['img-uploaded']
			#otherwise user image becomes new default image
			else:
				user.user_img = postData['img']
		#if current user image is an uploaded image
		else:
			#check if a new image was uploaded and replace if so
			if "img-uploaded" in fileData:
				user.user_img.delete()
				user.user_img = fileData['img-uploaded']
			#if a new image was not uploaded but no new image was selected, keep it the same
			elif "images" in postData['img']:
				print('We kept the same image!')
			#replace with new selected image
			else:
				user.user_img.delete()
				user.user_img = postData['img']         
		user.save()

	def authenticate(self, email, password):
		users = self.filter(email = email)
		if not users:
			return False
		user = users[0]
		return user.check_password(password)

	def create_user(self, name, email, username, password):
		user = self.model(
			name = name,
			username = username,
			email = self.normalize_email(email),
		)
		user.set_password(password)
		user.save(using = self._db)
		Token.objects.create(user=user)
		Profile.objects.create(user=user)
		return user
	
	def register(self, form):
		return self.create_user(
			name = form['name'],
			username = form['username'],
			email = form['email'],
			password = form['pw']
		)

	def create_superuser(self, name, email, username, password):
		user = self.create_user(
			name = name,
			username = username,
			email = self.normalize_email(email),
			password = password
		)
		user.is_admin = True
		user.is_staff = True
		user.is_superuser = True
		user.save(using = self._db)
		return user

	# def get_timeline(self, user):
	# 	timeline = {}
	# 	for post in user.posts.all():
	# 		timeline[post.created_at] = post
	# 	for review in user.reviews_added.all():
	# 		timeline[review.created_at] = review
	# 	for team in user.teams.all():
	# 		timeline[team.created_at] = team
	# 	following = user.profile.following.all()
	# 	for person in following:
	# 		for post in person.posts.all():
	# 			timeline[post.created_at] = post
	# 		for review in person.reviews_added.all():
	# 			timeline[review.created_at] = review
	# 		for team in person.teams.all():
	# 			timeline[team.created_at] = team
	# 	return timeline

	# def guest_timeline(self):
	# 	timeline = {}
	# 	for user in self.objects.all():
	# 		for post in user.posts.all():
	# 			timeline[post.created_at] = post
	# 		for review in user.reviews_added.all():
	# 			timeline[review.created_at] = review
	# 		for team in user.teams.all():
	# 			timeline[team.created_at] = team
	# 	return timeline

class PokeManager(models.Manager):
    def create_pkmn(self, index):
        response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{index}/")
        return self.create(
            name = response.json()["name"],
            sprite_url = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{index}.png",
            art_url = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{index}.png",
            hp = response.json()['stats'][0]['base_stat'],
            attack = response.json()['stats'][1]['base_stat'],
            defense = response.json()['stats'][2]['base_stat'],
            sp_attack = response.json()['stats'][3]['base_stat'],
            sp_defense = response.json()['stats'][4]['base_stat'],
            speed = response.json()['stats'][5]['base_stat']
        )
    def add_gen(self, index):
        pkmn = Pokemon.objects.get(id = index)
        if pkmn.id < 152:
            pkmn.gen = 1
        elif pkmn.id < 252:
            pkmn.gen = 2
        elif pkmn.id < 387:
            pkmn.gen = 3
        elif pkmn.id < 494:
            pkmn.gen = 4
        elif pkmn.id < 650:
            pkmn.gen = 5
        elif pkmn.id < 722:
            pkmn.gen = 6
        elif pkmn.id < 810:
            pkmn.gen = 7
        else:
            pkmn.gen = 8
        pkmn.save()

    def add_types(self, index):
        response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{index}/")
        current_pkmn = Pokemon.objects.get(id = index)
        for t in response.json()['types']:
            type_to_add = Type.objects.get(name = t['type']['name'])
            current_pkmn.types.add(type_to_add)

    def add_weaknesses(self, index):
        pkmn = Pokemon.objects.get(id = index)
        type1 = pkmn.types.all()[0]
        #add all of type1's weaknesses to Pokemon's weaknesses
        for weakness in type1.weak_to.all():
            pkmn.weak_to.add(weakness)
        #add all of type1's resistances to Pokemon's resistances
        for resistance in type1.resists.all():
            pkmn.resists.add(resistance)
        #add all of type1's immunites to Pokemon's immunities
        for immunity in type1.immune_to.all():
            pkmn.immune_to.add(immunity)
        #if a second type exists...
        if len(pkmn.types.all()) == 2:
            type2 = pkmn.types.all()[1]
            for weakness in type2.weak_to.all():
                #if type2's weakness is in Pokemon's resistances, remove resistance
                if weakness in pkmn.resists.all():
                    pkmn.resists.remove(weakness)
                #if type2's weakness isn't in Pokemon's immunities, add weakness to Pokemon
                elif weakness not in pkmn.immune_to.all():
                    pkmn.weak_to.add(weakness)
                else:
                    break
            for resistance in type2.resists.all():
                #if type2's resistance is in Pokemon's weaknesses, remove weakness
                if resistance in pkmn.weak_to.all():
                    pkmn.weak_to.remove(resistance)
                #if type2's resistance is not in type1's weaknesses, add resistance 
                elif resistance not in type1.weak_to.all():
                    pkmn.resists.add(resistance)
                else:
                    break
            for immunity in type2.immune_to.all():
                #if type2 immunity in Pokemon's weaknesses, remove weakness and add immunity
                if immunity in pkmn.weak_to.all():
                    pkmn.weak_to.remove(immunity)
                    pkmn.immune_to.add(immunity)
                #if type2 immunity in Pkmn's resistances, remove resistance and add immunity
                elif immunity in pkmn.resists.all():
                    pkmn.resists.remove(immunity)
                    pkmn.immune_to.add(immunity)
                #add immunity
                else:
                    pkmn.immune_to.add(immunity)

    def rating_avg(self, pkmn_id):
        pkmn = Pokemon.objects.get(id = pkmn_id)
        total = 0
        for review in pkmn.reviews.all():
            total += review.rating
        avg = total/len(pkmn.reviews.all())
        return round(avg, 2)

    def get_total(self, index):
        pkmn = Pokemon.objects.get(id = index)
        total = 0
        total += pkmn.hp
        total += pkmn.attack
        total += pkmn.defense
        total += pkmn.sp_attack
        total += pkmn.sp_defense
        total += pkmn.speed
        return total

class TypeManager(models.Manager):
    def create_type(self, index):
        response = requests.get(f"https://pokeapi.co/api/v2/type/{index}/")
        return self.create(
            name = response.json()['name']
        )
    def add_relation(self, index):
        response = requests.get(f"https://pokeapi.co/api/v2/type/{index}/")
        current_type = Type.objects.get(id = index)
        #add weaknesses
        if response.json()['damage_relations']['double_damage_from']:
            for weakness in response.json()['damage_relations']['double_damage_from']:
                type_to_add = Type.objects.get(name = weakness['name'])
                current_type.weak_to.add(type_to_add)
        #add resistances
        if response.json()['damage_relations']['half_damage_from']:
            for resistance in response.json()['damage_relations']['half_damage_from']:
                type_to_add = Type.objects.get(name = resistance['name'])
                current_type.resists.add(type_to_add)
        #add immunitites
        if response.json()['damage_relations']['no_damage_from']:
            for immunity in response.json()['damage_relations']['no_damage_from']:
                type_to_add = Type.objects.get(name = immunity['name'])
                current_type.immune_to.add(type_to_add)


#------------------------------------------#
# Models
# -----------------------------------------#
class User(AbstractBaseUser):
	name			= models.CharField(max_length=100)
	username		= models.CharField(max_length=30, unique=True)
	email			= models.EmailField(verbose_name="email", max_length=50, unique=True)
	created			= models.DateTimeField(auto_now_add=True)
	updated			= models.DateTimeField(auto_now=True)
	is_admin		= models.BooleanField(default=False)
	is_active		= models.BooleanField(default=True)
	is_staff		= models.BooleanField(default=False)
	is_superuser	= models.BooleanField(default=False)
	user_img		= models.ImageField(default="/default/0.png", upload_to="images/")
	bg_color		= models.CharField(max_length=20, default="gray")
	USERNAME_FIELD	= 'email'
	REQUIRED_FIELDS = ['name', 'username']

	def __str__(self):
		return self.name

	def has_perm(self, perm, obj = None):
		return self.is_admin
	
	def has_module_perms(self, app_label):
		return True

	objects = UserManager()

class Profile(models.Model):
	user		= models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
	bio			= models.TextField(null=True, blank=True)
	location	= models.CharField(max_length=100, null=True, blank=True)
	pronouns	= models.CharField(max_length=20, null=True, blank=True)
	following 	= models.ManyToManyField(User, related_name="followers", blank=True)
	created		= models.DateTimeField(auto_now_add=True)
	updated		= models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.user.name

class Post(models.Model):
	User		= models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
	content		= models.TextField()
	created		= models.DateTimeField(auto_now_add=True)
	updated		= models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.content

class Pokemon(models.Model):
	name = models.CharField(max_length=200, null = True)
	gen = models.IntegerField(null = True)
	sprite_url = models.CharField(max_length=200, null = True)
	art_url = models.CharField(max_length=200, null = True)
	hp = models.IntegerField(null = True)
	attack = models.IntegerField(null = True)
	defense = models.IntegerField(null = True)
	sp_attack = models.IntegerField(null = True)
	sp_defense = models.IntegerField(null = True)
	speed = models.IntegerField(null = True)
	favorited_by = models.ManyToManyField(User, related_name = "favorites")
	weak_to = models.ManyToManyField('main_app.Type', related_name = "weak_pkmn")
	resists = models.ManyToManyField('main_app.Type', related_name = "resistant_pkmn")
	immune_to = models.ManyToManyField('main_app.Type', related_name = "immune_pkmn")
	# objects = PokeManager()

	def __str__(self):
		return f"{self.id} {self.name.capitalize()}"

class Type(models.Model):
	name = models.CharField(max_length=50, null=True)
	pkmn = models.ManyToManyField(Pokemon, related_name = "types")
	weak_to = models.ManyToManyField("self", symmetrical = False, related_name = "strong_against")
	resists = models.ManyToManyField("self", symmetrical = False, related_name = "weak_against")
	immune_to = models.ManyToManyField("self", symmetrical = False, related_name = "no_effect_on")
	objects = TypeManager()

