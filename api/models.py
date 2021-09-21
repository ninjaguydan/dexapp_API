from django.db import models
from .managers import UserManager
from django.contrib.auth.models import AbstractBaseUser


class User(AbstractBaseUser):
	name			= models.CharField(max_length=100)
	username		= models.CharField(max_length=20, unique=True)
	email			= models.EmailField(verbose_name="email", max_length=50, unique=True)
	created 		= models.DateTimeField(auto_now_add=True)
	updated			= models.DateTimeField(auto_now=True)

	is_admin		= models.BooleanField(default=False)
	is_active		= models.BooleanField(default=True)
	is_staff		= models.BooleanField(default=False)
	is_superuser	= models.BooleanField(default=False)

	user_img		= models.ImageField(default="/default/0.png", upload_to="images/")
	bg_color		= models.CharField(max_length=20, default="gray")

	USERNAME_FIELD	= "email"
	REQUIRED_FIELDS	= ["name", "username"]

	def __str__(self):
		return self.username
	
	def has_perm(self, perm, obj=None):
		return self.is_admin
	
	def has_module_perms(self, app_label):
		return True
	
	objects = UserManager()
	
class Profile(models.Model):
	user 		= models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
	bio			= models.TextField(null=True, blank=True)
	location	= models.CharField(max_length=100, null=True, blank=True)
	pronouns	= models.CharField(max_length=100, null=True, blank=True)
	following	= models.ManyToManyField(User, related_name="followers", blank=True)
