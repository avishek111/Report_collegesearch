from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    Username = models.CharField(max_length=100)
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    phone_num = models.CharField(max_length=10)
    profile_picture = models.FileField(upload_to='static/profile', default='static/images/user.png')
    created_date = models.DateTimeField(auto_now_add=True)
