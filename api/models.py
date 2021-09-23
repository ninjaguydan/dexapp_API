from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import UserManager

# Create your models here.
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
		return self.user.username

class Post(models.Model):
	User		= models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
	content		= models.TextField()
	created		= models.DateTimeField(auto_now_add=True)
	updated		= models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.content