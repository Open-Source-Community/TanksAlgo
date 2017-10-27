# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from Registration.forms import UserForm
from django.shortcuts import render


#Displays and handles user registration
def register(request):
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data = request.POST)
        if user_form.is_valid():
            user = user_form.save()
              #Hashing
            user.set_password(user.password)
            user.save()
            registered = True
        else:
            print(user_form.errors)
    else:
        user_form =UserForm()
    return render(request,'Registration_app/registration.html',{'user_form':user_form,'registered':registered})
