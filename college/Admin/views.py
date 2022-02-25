from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from account.auth import unauthenticated_user, admin_only,user_only
from django.shortcuts import render, redirect

from notifications.notific import SendNotification
from .form import CategoryForm, CollegeForm, LocationForm, College_students_form, notification_form
from .models import Category, Colleges, Locations, Colleges_of_student, notifications
from django.contrib import messages
from .filters import LocationFilter
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from home.models import *


def add_category(request):
    if request.method == "POST":
        form = CategoryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Category added successfully')
            return redirect("/show_category")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add category')
            return render(request, 'Admin/add_category.html', {'add_category':form})
    context ={
        'form_category': CategoryForm,
        'activate_category': 'active'
    }
    return render(request, 'Admin/add_category.html', context)


def dashboard(request):
    return render(request,'Admin/dashboard.html')


def show_category(request):
    categories = Category.objects.all().order_by('-id')
    context={
        'categories':categories,
        'activate_category':'active'
    }
    return render(request,'Admin/show_category.html',context)


def update_category(request,category_id):
    category = Category.objects.get(id=category_id)
    if request.method == "POST":
        form = CategoryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Category added successfully')
            return redirect("/show_category")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add category')
            return render(request, 'Admin/add_category.html', {'add_category':form})
    context ={
        'form_category': CategoryForm(instance=category),
        'activate_category': 'active'
    }
    return render(request, 'Admin/add_category.html', context)


def delete_category(request,category_id):
    category = Category.objects.get(id=category_id)
    category.delete()
    messages.add_message(request,messages.SUCCESS,'Category deleted successfully')
    return redirect('/show_category')

# list of college


def add_college(request):
    if request.method == "POST":
        form = College_students_form(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'College added successfully')
            return redirect("/show_colleges")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add college')
            return render(request, 'Admin/add_college.html', {'add_college':form})
    context ={
        'form_category': College_students_form,
        'activate_category': 'active'
    }
    return render(request, 'Admin/add_college.html', context)


def show_college(request):
    colleges = Colleges_of_student.objects.all().order_by('-id')
    # location_filter = LocationFilter(request.GET, queryset=colleges)
    # location_final = location_filter.qs
    context={
        'colleges':colleges,
        # 'location_filter': location_filter,
        'activate_college':'active'
    }
    return render(request,'Admin/show_colleges.html',context)


def update_college(request, id):
    college = Colleges_of_student.objects.get(id=id)
    if request.method == "POST":
        form = College_students_form(request.POST,instance=college)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'College updated successfully')
            return redirect("/show_colleges")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to update colleges')
            return render(request, 'Admin/update_college.html', {'form_category':form})
    context ={
        'form_category': College_students_form(instance=college),
        'activate_category': 'active'
    }
    return render(request, 'Admin/update_college.html', context)


def delete_college(request,college_id):
    college= Colleges_of_student.objects.get(id=college_id)
    college.delete()
    messages.add_message(request,messages.SUCCESS,'College deleted successfully')
    return redirect('/show_colleges')




# show location and colleges


def show_location_college(request):
    colleges = Colleges.objects.all().order_by('-id')
    location_filter = LocationFilter(request.GET, queryset=colleges)
    location_final = location_filter.qs
    context = {
        'colleges': location_final,
        'location_filter': location_filter,
        'activate_college': 'active'
    }
    return render(request,'Admin/show_location_college.html',context)


def khabar(request):
    locations = Locations.objects.all().order_by('-id')
    context = {
        'locations': locations,
        # 'location_filter': location_filter,
        'activate_college': 'active'
    }
    return render(request, 'Admin/khabar.html', context)

# to get the data of location and college

def add_locations(request):
    if request.method == "POST":
        form = LocationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Details added successfully')
            return redirect("/show_category")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add details')
            return render(request, 'Admin/add_locations.html', {'add_locations':form})
    context ={
        'form_locations': LocationForm,
        'activate_category': 'active'
    }
    return render(request, 'Admin/add_locations.html', context)


def show_locations(request):
    locations = Locations.objects.all().order_by('-id')
    context = {
        'locations': locations,
        # 'location_filter': location_filter,
        'activate_college': 'active'
    }
    return render(request, 'Admin/show_locations.html', context)


# def front(request):
#     return render(request, 'Admin/fil.html')

def admin_dashboard(request):
    return render(request, 'Admin/admin_dashboard.html')

def add_notification(request):
    if request.method == "POST":
        form = notification_form(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'notifications added successfully')
            # return redirect("/show_notification")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add category')
            return render(request, 'Admin/add_notification.html', {'add_category':form})
    context ={
        'form_category': notification_form,
        'activate_category': 'active'
    }
    return render(request, 'Admin/add_notification.html', context)

def get_notification(request):
    notification = notifications.objects.all().order_by('-id')
    print(notification)
    context={
        'notifications':notification
    }
    return render(request,'home/user_dashboard.html',context)


def get_users(request):
    users = User.objects.filter(is_staff=0).order_by('-id')
    context = {
        'users':users
    }
    return render(request, 'Admin/users.html', context)


def get_admins(request):
    admins = User.objects.filter(is_staff=1).order_by('-id')
    context = {
        'admins':admins
    }
    return render(request, 'Admin/admins.html', context)


def promote_user(request,user_id):
    user = User.objects.get(id=user_id)
    user.is_staff=True
    user.save()
    messages.add_message(request, messages.SUCCESS, 'User promoted to admin')
    return redirect('/admins')


def demote_user(request,user_id):
    user = User.objects.get(id=user_id)
    user.is_staff=False
    user.save()
    messages.add_message(request, messages.SUCCESS, 'Admin demoted to user')
    return redirect('/users')

# @login_required
# @admin_only
# def deactivate_admin(request, user_id):
#     user = User.objects.get(id=user_id)
#     user.delete()
#     messages.add_message(request, messages.SUCCESS, 'admin deactivated succesfully')
#     return redirect('/admins/admins')



def deactivate_user(request,user_id):
    user = User.objects.get(id=user_id)
    user.is_active=False
    user.save()
    messages.add_message(request, messages.SUCCESS, 'user Disabled')
    return redirect('/users')


def activate_user(request,user_id):
    user = User.objects.get(id=user_id)
    user.is_active=True
    user.save()
    messages.add_message(request, messages.SUCCESS, 'Admin enabled')
    return redirect('/admins')

def activate_users(request,user_id):
    user = User.objects.get(id=user_id)
    user.is_active=True
    user.save()
    messages.add_message(request, messages.SUCCESS, 'user enabled')
    return redirect('/users')


def user_admission(request):
    admission = Admission.objects.all()
    context={
        'admission':admission
    }
    return render(request,'Admin/user_admission.html',context)


def delete_admission(request,id):
    college= Admission.objects.get(id=id)
    college.delete()
    messages.add_message(request,messages.SUCCESS,'College deleted successfully')
    return redirect('/user_admission')

def deletes_admission(request,id):
    college= Admission.objects.get(id=id)
    college.delete()
    message = f"Your notification was read by admin"
    SendNotification(request.user,message)
    messages.add_message(request,messages.SUCCESS,'Read successfully')
    return redirect('/user_admission')