from django.apps import AppConfig


class ApiConfig(AppConfig):
	default_auto_field = 'django.db.models.BigAutoField'
	name = 'api'

	def ready(self):
		from .models import Type, Pokemon
		if len(Type.objects.all()) == 0:
			# Create table for all 18 types
			for i in range(1,19):
				Type.objects.create_type(i)
			# Create Type relationships
			for t in Type.objects.all():
				Type.objects.add_relation(t.id)

		if len(Pokemon.objects.all()) == 0:
			for i in range(1,899):
				Pokemon.objects.create_pkmn(i)
				#add types to pokemon
				Pokemon.objects.add_types(i)
				#add weakness/resistance info to pokemon
				Pokemon.objects.add_weaknesses(i)
				#add gen
				Pokemon.objects.add_gen(i)
