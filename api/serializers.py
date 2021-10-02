from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Pokemon, Post, Type, User

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
	def create(self, validated_data):
		user = User.objects.create_user(**validated_data)
		return user
			
class PokeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pokemon
		fields = "__all__"
		# depth = 1

class TypeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Type
		fields = "__all__"
