from .models import Pokemon, Post, User, Type, Review
from .serializers import PokeSerializer, PostSerializer, ReviewSerializer, UserSerializer, TypeSerializer
from rest_framework import serializers, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated


class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all()
	serializer_class = PostSerializer
	permission_classes = [IsAuthenticated]
	# authentication_classes = (TokenAuthentication)

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class PokeViewSet(viewsets.ModelViewSet):
	queryset = Pokemon.objects.all()
	serializer_class = PokeSerializer

class TypeViewSet(viewsets.ModelViewSet):
	queryset = Type.objects.all()
	serializer_class = TypeSerializer

class ReviewViewSet(viewsets.ModelViewSet):
	queryset = Review.objects.all()
	serializer_class = ReviewSerializer



'''''
class PostList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

	def get(self, request):
		return self.list(request)

	def post(self, request):
		return self.create(request)

class PostDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
	queryset = Post.objects.all()
	serializer_class = PostSerializer
	lookup_field = "id"

	def get(self, request, id):
		return self.retrieve(request, id=id)

	def put(self, request, id):
		return self.update(request, id=id)
	
	def delete(self, request, id):
		return self.destroy(request, id=id)

class PostList(APIView):
	def get(self, request):
		posts = Post.objects.all()
		serializer = PostSerializer(posts, many=True)
		return Response(serializer.data)

	def post(self, request):
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostDetails(APIView):
	def get_object(self, id):
		try:
			return Post.objects.get(id=id)
		except Post.DoesNotExist:
			return Response(status.HTTP_404_NOT_FOUND)

	def get(self, request, id):
		post = self.get_object(id)
		serializer = PostSerializer(post)
		return Response(serializer.data)

	def put(self, request, id):
		post = self.get_object(id)
		serializer = PostSerializer(post, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, id):
		post = self.get_object(id)
		post.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)



# Create your views here (function-based).
@api_view(['GET', 'POST'])
def post_list(request):
	if request.method == "GET":
		posts = Post.objects.all()
		serializer = PostSerializer(posts, many=True)
		return Response(serializer.data)
	
	elif request.method == "POST":
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
	try:
		post = Post.objects.get(id=pk)
	except Post.DoesNotExist:
		return Response(status.HTTP_404_NOT_FOUND)
	
	if request.method == 'GET':
		serializer = PostSerializer(post)
		return Response(serializer.data)
	
	elif request.method == 'PUT':
		serializer = PostSerializer(post, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	
	elif request.method == 'DELETE':
		post.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
'''