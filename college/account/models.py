from django.contrib.auth.models import User
from django.db import models

class User_profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    Username = models.CharField(max_length=100)
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    profile_picture = models.FileField(upload_to='static/profile', default='static/images/pro.png')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user
