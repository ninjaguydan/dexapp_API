from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.apps import apps
import re
# User = apps.get_model(app_label="api", model_name="User")

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
	
	def update_validator(self, postData):
		errors = {}
		if len(postData['name']) < 2:
			errors['name'] = "First name must be at least 2 characters" 
		return errors

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

class ProfileManager(models.Manager):
	def update(self, postData, index):
		profile = self.objects.get(id = index)
		if len(postData['bio']) == 0 or postData['bio'] == "None":
			profile.bio = None
		else:
			profile.bio = postData['bio']
		if len(postData['location']) == 0 or postData['location'] == "None":
			profile.location = None
		else:
			profile.location = postData['location']
		if len(postData['pronouns']) == 0 or postData['pronouns'] == "None":
			profile.pronouns = None
		else:
			profile.pronouns = postData['pronouns']
		profile.save()
		return