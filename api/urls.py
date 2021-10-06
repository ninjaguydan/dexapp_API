from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', views.PostViewSet, basename="posts")
router.register('users', views.UserViewSet)
router.register('pokemon', views.PokeViewSet)
router.register('types', views.TypeViewSet)
router.register('reviews', views.ReviewViewSet)

urlpatterns = [
	path('', include(router.urls))
	# path('posts/', views.post_list),
	# path('posts/<int:pk>', views.post_detail),
	# path('posts/', views.PostList.as_view()),
	# path('posts/<int:id>', views.PostDetails.as_view()),
]