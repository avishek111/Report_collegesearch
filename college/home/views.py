from django.contrib import messages
from django.contrib.auth import login, authenticate
from django.core.files.storage import FileSystemStorage
from django.core.paginator import Paginator
from django.contrib.auth.models import User
from account.auth import unauthenticated_user, admin_only,user_only
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from Admin.models import Colleges, Colleges_of_student
from Admin.form import CollegeForm, College_students_form
from account.forms import Loginform
from Admin.filters import *
from home.models import Cart, Admission
from django.contrib import messages
from notifications.notific import SendNotification
from .filter import college_filters


@login_required
@user_only
def user_dashboard(request):
    user_id = request.user.username
    context = {
        'user_id':user_id
    }
    return render(request, 'home/user_dashboard.html',context)

# def profile(request):
#     profile= request.user.profile
#     if request.method== 'POST':
#         form = ProfileForm(request.POST, request.FILES, instance=profile)
#         if form.is_valid():
#             form.save()
#             messages.add_message(request, messages.SUCCESS, 'Profile Updated Successfully')
#             return redirect('/admin/profile')
#     context = {
#         'form': ProfileForm(instance=profile)
#     }
#     return render(request, 'accounts/profile.html', context)
#
#

def filter(request):
    colleges = Colleges_of_student.objects.all().order_by('-id')
    college_paginator = Paginator(colleges, 9)
    page_num = request.GET.get('page')
    page = college_paginator.get_page(page_num)

    c =Colleges_of_student.objects.filter(college_type="Public")
    public_paginator = Paginator(c,9)
    public_page = request.GET.get('page1')
    page1 = public_paginator.get_page(public_page)

    d = Colleges_of_student.objects.filter(college_type="Private")
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
    return render(request, 'home/show_location_college.html', context)


def front(request):
    return render(request, 'home/dash1.html')


def faq(request):
    return render(request, 'home/faq.html')

def search(request):
    colleges = Colleges_of_student.objects.all().order_by('-id')


    if request.method == "POST":
        user_id = request.user.username
        val1 = request.POST["check"]

        print(val1)
        if val1:
            c = Colleges_of_student.objects.filter(college_level=val1)
            public_paginator = Paginator(c, 9)
            public_page = request.GET.get('page1')
            page1 = public_paginator.get_page(public_page)

            location_filter = LocationFilter(request.GET, queryset=colleges)
            location_final = location_filter.qs
            college_paginator = Paginator(location_final, 9)
            page_num = request.GET.get('page')
            page = college_paginator.get_page(page_num)
            context = {
                "page":page1,
                'user_id':user_id,
                'location_filter': location_filter,
            }
            return render(request, 'home/search.html', context)

    c = Colleges_of_student.objects.filter(college_type="Public")
    public_paginator = Paginator(c, 9)
    public_page = request.GET.get('page1')
    page1 = public_paginator.get_page(public_page)

    d = Colleges_of_student.objects.filter(college_type="Private")
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
    return render(request, 'home/search.html', context)


def college_dashboard(request):
    colleges = Colleges_of_student.objects.all().order_by('-id')
    c = Colleges_of_student.objects.filter(college_type="Public")
    public_paginator = Paginator(c, 9)
    public_page = request.GET.get('page1')
    page1 = public_paginator.get_page(public_page)

    d = Colleges_of_student.objects.filter(college_type="Private")
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
    return render(request, 'home/college_dashboard.html', context)



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

 # wish list of users

@login_required
@user_only
def user_colleges(request):
    if request.method == "POST":
        user_id = request.user.username
        val1 = request.POST["check"]
        print(val1)
        if val1:
            c = Colleges_of_student.objects.filter(college_level=val1)
            public_paginator = Paginator(c, 9)
            public_page = request.GET.get('page1')
            page1 = public_paginator.get_page(public_page)
            context = {
                "page":page1,
                'user_id':user_id
            }
            return render(request, 'home/user_colleges.html', context)
        # elif :
        #     f =Colleges_of_student.objects.filter(college_level="val")
        #     three_paginator = Paginator(f, 9)
        #     three_page = request.GET.get('page4')
        #     page4 = three_paginator.get_page(three_page)
        #     context = {
        #         'page': page4,
        #         'activate_category': 'active',
        #         'activate_college': 'active',
        #         'user_id': user_id
        #     }
        #     return render(request, 'home/user_colleges.html', context)
        else:
            f =Colleges_of_student.objects.filter(college_level="val1")
            three_paginator = Paginator(f, 9)
            three_page = request.GET.get('page4')
            page4 = three_paginator.get_page(three_page)
            context = {
                'page': page4,
                'activate_category': 'active',
                'activate_college': 'active',
                'user_id': user_id
            }
            return render(request, 'home/user_colleges.html', context)
    my_college = college_filters()
    user_id = request.user.username
    colleges = Colleges_of_student.objects.all().order_by('id')
    location_filter = LocationFilter(request.GET, queryset=colleges)
    location_final = location_filter.qs
    college_paginator = Paginator(location_final, 9)
    page_num = request.GET.get('page')
    page = college_paginator.get_page(page_num)
    context= {
        'page': page,
        'location_filter': location_filter,
        'colleges': location_final,
        'user_id': user_id,
        'my_college':my_college
    }
    return render(request, 'home/user_colleges.html',context)

@login_required
@user_only
def user_college_details(request,id):
    if request.method == "POST":
        if request.POST['email'] and request.POST['text'] and request.FILES['file']:
            post = Admission()
            post.Email = request.POST['email']
            post.Text = request.POST['text']
            post.Certificate=request.FILES['file']
            post.save()
            messages.add_message(request, messages.SUCCESS, 'On the way')
            message = f"new admission"
            user = 34
            SendNotification(user, message)
            return redirect('/user_colleges')
        else:
            return redirect('/user_colleges')
    f = Colleges_of_student.objects.filter(id=id)
    three_paginator = Paginator(f, 9)
    three_page = request.GET.get('page4')
    page4 = three_paginator.get_page(three_page)
    context = {
        'page': page4
    }
    return render(request, 'home/user_college_details.html',context)



@login_required
@user_only
def user_wishlist(request,id):
    user = request.user
    food = Colleges_of_student.objects.get(id=id)
    check_item_presence = Cart.objects.filter(user=user, food=food)
    if check_item_presence:
        messages.success(request,'Item already exited')
        return redirect('/user_colleges')
    else:
        cart = Cart.objects.create(food=food, user=user)
        if cart:
            messages.add_message(request, messages.SUCCESS, 'Item added to cart')
            message = f"Item added"
            SendNotification(request.user,message)
            return redirect('/user_colleges')
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add item to cart')
            return redirect('/user_colleges')


@login_required
@user_only
def show_cart_items(request):
    user = request.user
    items = Cart.objects.filter(user=user)
    context = {
        'items':items,
        'activate_my_cart':'active'
    }
    return render(request, 'home/wishlist.html', context)

@login_required
@user_only
def remove_cart_item(request,cart_id):
    user = request.user
    item = Cart.objects.get(food_id=cart_id,user_id=user)
    print(item)
    item.delete()
    messages.add_message(request, messages.SUCCESS, 'Item removed successfully')
    return redirect('/my_colleges')

