from django.urls import path
from . import views

urlpatterns = [
	path('', views.getRoutes, name="routes"),
	path('users/', views.getUsers, name="users"),
	path('users/<str:pk>/', views.getUser, name="user"),
]

#RESTful routes?
# GET	/pkmn/

# GET	/pkmn/<pkmn id>							-display pkmn profile
# PUT	/pkmn/<pkmn id> 						-favorite pkmn

# POST	/pkmn/<pkmn id>/review 					-create review
# PUT	/pkmn/<pkmn id>/review 					-like review
# DEL	/pkmn/<pkmn id>/review 					-delete review

# POST	/pkmn/<pkmn id>/review/<review id> 		-create review comment
# PUT	/pkmn/<pkmn id>/review/<review id> 		-like review comment
# DEL	/pkmn/<pkmn id>/review/<review id> 		-delete review comment
 	
# POST	/pkmn/<pkmn id>/team					-create team
# PUT	/pkmn/<pkmn id>/team 					-add pkmn to team(s)

# GET	/pkmn/team/<team id>					-display team
# POST	/pkmn/team/<team id>					-update team
# PUT	/pkmn/team/<team id>					-like team
# DEL	/pkmn/team/<team id>					-delete team

# POST	/pkmn/team/<team id>/comment			-create team comment
# PUT	/pkmn/team/<team id>/comment			-like team comment
# DEL	/pkmn/team/<team id>/comment			-delete team comment



# GET	/profile/<profile id>					-display profile
# POST	/profile/<profile id>					-update profile
# PUT	/profile/<profile id>					-follow profile
# DEL	/profile/<profile id>					-delete profile

# POST	/profile/<profile id>/post				-create post
# PUT	/profile/<profile id>/post				-like post
# DEL	/profile/<profile id>/post				-delete post

# POST	/profile/<profile id>/post/<post id>	-create post comment
# PUT	/profile/<profile id>/post/<post id>	-like post comment
# DEL	/profile/<profile id>/post/<post id>	-delete post comment



# GET	/login									-display login page
# PUT	/login									-logs in user

# GET	/register								-display signup page
# POST	/register								-creates a user

# GET	/logout									-logs out a user



# GET	/search									-searches the dex
# PUT	/search									-queries the database