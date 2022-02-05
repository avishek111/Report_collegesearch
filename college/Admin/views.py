from django.shortcuts import render

from django.shortcuts import render, redirect
from .form import CategoryForm, CollegeForm, LocationForm
from .models import Category, Colleges, Locations
from django.contrib import messages
from .filters import LocationFilter
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required


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
        form = CollegeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'College added successfully')
            return redirect("/show_colleges")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add college')
            return render(request, 'Admin/add_category.html', {'add_college':form})
    context ={
        'form_category': CollegeForm,
        'activate_category': 'active'
    }
    return render(request, 'Admin/add_college.html', context)


def show_college(request):
    colleges = Colleges.objects.all().order_by('-id')
    # location_filter = LocationFilter(request.GET, queryset=colleges)
    # location_final = location_filter.qs
    context={
        'colleges':colleges,
        # 'location_filter': location_filter,
        'activate_college':'active'
    }
    return render(request,'Admin/show_colleges.html',context)


def update_college(request,college_id):
    college = Colleges.objects.get(id=college_id)
    if request.method == "POST":
        form = CollegeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'College added successfully')
            return redirect("/show_colleges")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add college')
            return render(request, 'Admin/update_college_form.html', {'add_college':form})
    context ={
        'form_category': CollegeForm(instance=college),
        'activate_category': 'active'
    }
    return render(request, 'Admin/update_college.html', context)


def delete_college(request,college_id):
    college= Colleges.objects.get(id=college_id)
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

def filter(request):
    colleges = Colleges.objects.all().order_by('-id')
    college_paginator = Paginator(colleges, 9)
    page_num = request.GET.get('page')
    page = college_paginator.get_page(page_num)

    c = Colleges.objects.filter(college_type="Public")
    public_paginator = Paginator(c,9)
    public_page = request.GET.get('page1')
    page1 = public_paginator.get_page(public_page)

    d = Colleges.objects.filter(college_type="Private")
    private_paginator = Paginator(d,9)
    private_page = request.GET.get('page2')
    page2 = private_paginator.get_page(private_page)

    location_filter = LocationFilter(request.GET, queryset=colleges)
    location_final = location_filter.qs
    context = {
        'count1':college_paginator.count,
        'page':page,
        'count2':public_paginator.count,
        'page1':page1,
        'count3':private_paginator.count,
        'colleges': location_final,
        'page2':page2,
        'c':c,
        'd':d,
        'activate_category':'active',
        'location_filter': location_filter,
        'activate_college': 'active'
    }
    return render(request, 'Admin/show_location_college.html', context)


def front(request):
    return render(request, 'Admin/dash.html')


def search(request):
    colleges = Colleges.objects.all().order_by('-id')
    c = Colleges.objects.filter(college_type="Public")
    public_paginator = Paginator(c, 9)
    public_page = request.GET.get('page1')
    page1 = public_paginator.get_page(public_page)

    d = Colleges.objects.filter(college_type="Private")
    private_paginator = Paginator(d, 9)
    private_page = request.GET.get('page2')
    page2 = private_paginator.get_page(private_page)

    e = Colleges.objects.filter(college_level="2 Year")
    two_paginator = Paginator(e, 9)
    two_page = request.GET.get('page3')
    page3 = two_paginator.get_page(two_page)

    f = Colleges.objects.filter(college_level="4 Year")
    three_paginator = Paginator(f, 9)
    three_page = request.GET.get('page4')
    page4 = three_paginator.get_page(three_page)

    location_filter = LocationFilter(request.GET, queryset=colleges)
    location_final = location_filter.qs
    college_paginator = Paginator(location_final, 9)
    page_num = request.GET.get('page')
    page = college_paginator.get_page(page_num)
    context = {
        'count1': college_paginator.count,
        'page': page,
        'count2': public_paginator.count,
        'page1': page1,
        'page3': page3,
        'page4':page4,
        'count3': private_paginator.count,
        'colleges': location_final,
        'page2': page2,
        'c': c,
        'd': d,
        'activate_category': 'active',
        'location_filter': location_filter,
        'activate_college': 'active'
    }
    return render(request, 'Admin/Search.html', context)

def college_dashboard(request):
    colleges = Colleges.objects.all().order_by('-id')
    c = Colleges.objects.filter(college_type="Public")
    public_paginator = Paginator(c, 9)
    public_page = request.GET.get('page1')
    page1 = public_paginator.get_page(public_page)

    d = Colleges.objects.filter(college_type="Private")
    private_paginator = Paginator(d, 9)
    private_page = request.GET.get('page2')
    page2 = private_paginator.get_page(private_page)

    location_filter = LocationFilter(request.GET, queryset=colleges)
    location_final = location_filter.qs
    college_paginator = Paginator(location_final, 9)
    page_num = request.GET.get('page')
    page = college_paginator.get_page(page_num)
    context = {
        'count1': college_paginator.count,
        'page': page,
        'count2': public_paginator.count,
        'page1': page1,
        'count3': private_paginator.count,
        'colleges': location_final,
        'page2': page2,
        'c': c,
        'd': d,
        'activate_category': 'active',
        'location_filter': location_filter,
        'activate_college': 'active'
    }
    return render(request, 'Admin/college_dashboard.html', context)



# def searche(request):
#     searched = request.GET['searched']
#     data = Colleges.objects.filter(college_name=searched)
#     return render(request, 'Admin/Search.html',{'data':data})


# def get_val(request):
#     choice = request.POST.get("public1")
#     if choice == "public":
#         public_filter = Colleges.objects.filter(college_type="Public")
#         context = {
#             'public_filter':public_filter
#         }
#         return render(request,'Admin/Search.html', context)
#
#     elif choice == "private":
#         private_filter = Colleges.objects.filter(college_type="Private")
#         context = {
#             'private_filter':private_filter
#         }
#         return render(request, 'Admin/Search.html', context)
#     else:
#         return render(request, 'Admin/Search.html')