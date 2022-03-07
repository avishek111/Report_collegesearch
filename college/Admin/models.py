from django.db import models
from django.core import validators
from django.contrib.auth.models import User

class Category(models.Model):
    category_name = models.CharField(max_length=200, null=True, validators=[validators.MinLengthValidator(2)])
    category_description = models.TextField(null=True)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    category_image = models.FileField(upload_to='static/uploads', null=True)

    def __str__(self):
        return self.category_name


class Colleges(models.Model):
    college_name=models.CharField(max_length=500,null=True, validators=[validators.MinLengthValidator(2)])
    college_location=models.CharField(max_length=200,null=True)
    college_level=models.CharField(max_length=200,null=True)
    college_type=models.CharField(max_length=200,null=True)
    college_popularity=models.CharField(max_length=200,null=True)
    college_annual_cost=models.IntegerField()
    college_image = models.FileField(upload_to='static/uploads', null=True)

    def __str__(self):
        return self.college_name


class Locations(models.Model):
    location_name=models.CharField(max_length=200,null=True)
    college_name=models.CharField(max_length=200,null=True)
    stream=models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.location_name

class Colleges_of_student(models.Model):
    college_name = models.CharField(max_length=500, null=True, validators=[validators.MinLengthValidator(2)])
    college_location = models.CharField(max_length=200, null=True)
    college_level = models.CharField(max_length=200, null=True)
    college_type = models.CharField(max_length=200, null=True)
    college_course = models.CharField(max_length=200, null=True)
    college_popularity = models.CharField(max_length=200, null=True)
    college_annual_cost = models.IntegerField()
    college_image = models.FileField(upload_to='static/uploads', null=True)
    college_description= models.CharField(max_length=2000, null=True)
    college_no_of_seats = models.IntegerField()
    college_remaining_seats = models.IntegerField()
    college_instructor_name =  models.CharField(max_length=200, null=True)
    college_instructor_description = models.CharField(max_length=2000, null=True)
    college_language = models.CharField(max_length=200, null=True)
    Lectures = models.IntegerField()
    weekly_Quizes = models.IntegerField()
    college_duration = models.IntegerField()
    Total_no_of_seats = models.IntegerField()
    Remaining_seats = models.IntegerField()
    Weekly_assenments = models.CharField(max_length=200, null=True)


    def __str__(self):
        return self.college_name


class notifications(models.Model):
    news =  models.CharField(max_length=200, null=True)
    created_date = models.DateTimeField(auto_now_add=True, null=True)


class Samp(models.Model):
    status = (
        ('pending','pending'),
        ('received','received'),
    )
    news = models.CharField(max_length=200, null=True)
    stat = models.CharField(max_length=200,null=True,choices=status)

class admin_profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    Username = models.CharField(max_length=100)
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    profile_picture = models.FileField(upload_to='static/profile', default='static/images/pro.png')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user

class admin_profiles(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    Username = models.CharField(max_length=100)
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    profile_picture = models.FileField(upload_to='static/profile', default='static/images/pro.png')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user


class admin_profiles(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    Username = models.CharField(max_length=100)
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    profile_picture = models.FileField(upload_to='static/profile', default='static/images/pro.png')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user
