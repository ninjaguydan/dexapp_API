from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Post, User

class PostSerializer(ModelSerializer):
	class Meta:
		model = Post
		fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = "__all__"

		extra_kwargs = {'password':{
			'write_only': True,
			'required' :True,
		}}
			

