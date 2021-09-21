from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User, Profile
from .serializers import UserSerializer, ProfileSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
	routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
	return Response(routes)

@api_view(['GET'])
def getUsers(request):
	users = Profile.objects.all()
	serializer = ProfileSerializer(users, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
	user = Profile.objects.get(id = pk)
	serializer = ProfileSerializer(user, many=False)
	return Response(serializer.data)

