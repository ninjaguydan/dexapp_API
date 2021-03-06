from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Pokemon, Post, Profile, Review, User, Type


class AccountAdmin(UserAdmin):
	list_display = ('username', 'email', 'created', 'last_login', 'is_admin', 'is_staff')
	search_fields = ('name', 'username', 'email')
	readonly_fields = ('id', 'created', 'last_login')

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()

# Register your models here.
admin.site.register(User, AccountAdmin)
admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(Type)
admin.site.register(Pokemon)
admin.site.register(Review)