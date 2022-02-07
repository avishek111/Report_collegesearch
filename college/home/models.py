from django.contrib.auth.models import User
from django.db import models
from Admin.models import Colleges_of_student


class Cart(models.Model):
    food = models.ForeignKey(Colleges_of_student, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)