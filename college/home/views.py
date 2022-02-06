from django.contrib import messages
from django.core.paginator import Paginator

from account.auth import unauthenticated_user, admin_only,user_only
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from Admin.models import Colleges
from Admin.form import CollegeForm
from Admin.filters import *


def user_dashboard(request):
    return render(request,'home/user_dashboard.html')

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
    return render(request, 'home/show_location_college.html', context)


def front(request):
    return render(request, 'home/dash.html')

@login_required
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
    return render(request, 'home/search.html', context)

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



