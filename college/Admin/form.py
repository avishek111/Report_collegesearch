
from django.forms import ModelForm
from .models import Category, Colleges, Locations, Colleges_of_student, notifications


class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields = "__all__"


class CollegeForm(ModelForm):
    class Meta:
        model = Colleges
        fields = "__all__"

class LocationForm(ModelForm):
    class Meta:
        model = Locations
        fields= "__all__"

class College_students_form(ModelForm):
    class Meta:
        model = Colleges_of_student
        fields="__all__"

class notification_form(ModelForm):
    class Meta:
        model = notifications
        fields = "__all__"