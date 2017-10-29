# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from Registration.forms import UserForm
from django.shortcuts import render
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect,HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login,logout,authenticate

#Returns registration home page
def home(request):
    return render(request,'Registration_app/base.html',{})

#Displays and handles user registration
def register(request):
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data = request.POST)
        if user_form.is_valid():
            user = user_form.save()
            #Hashing user's password
            user.set_password(user.password)
            user.save()
            registered = True
        else:
            print(user_form.errors)
    else:
        user_form =UserForm()

    return render(request,'Registration_app/registration.html',
                  {'user_form':user_form,'registered':registered})

#Returns login prompt and verifies user's information
def user_login(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username,password=password)

        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('Registration_app:home'))
            else:
                HttpResponse('User is not active!')
        else:
            return HttpResponse('Invalid login information! Try again')
    else:
        return render(request,'Registration_app/login.html',{})

#Logs the user out
@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('Registration_app:home'))