from django.db import models
from django.conf import settings
from Admin.models import Colleges_of_student


class wishlist(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='wishlist')
    item = models.ForeignKey(Colleges_of_student, on_delete=models.CASCADE)



