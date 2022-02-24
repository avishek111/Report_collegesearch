import django_filters
from .models import Colleges
from .form import CollegeForm
from django.contrib.auth.models import User, Group
from django_filters import CharFilter


class LocationFilter(django_filters.FilterSet):
    class Meta:
        model = Colleges
        fields = ['college_name','college_location']
