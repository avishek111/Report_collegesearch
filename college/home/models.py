from django.contrib.auth.models import User
from django.db import models
from Admin.models import Colleges_of_student


class Cart(models.Model):
    food = models.ForeignKey(Colleges_of_student, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)


class Admission(models.Model):
    Email = models.CharField(max_length=100)
    Text = models.CharField(max_length=100)
    Certificate = models.FileField(upload_to='static/certificate')


class college_filter(models.Model):
    college_name= (
    ('Manasalu college','Manasalu college')
)
    college_location = (
        ('Nayabazar,kathmandu','Nayabazar,kathmandu')
    )


