import django_filters
from .models import *

class college_filters(django_filters.FilterSet):
    class Meta:
        model = college_filter
        fields = '__all__'
