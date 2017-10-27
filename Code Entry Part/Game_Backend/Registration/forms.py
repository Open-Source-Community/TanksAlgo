from django import forms
from django.contrib.auth.models import User
from Registration.models import UserProfile

class UserForm(forms.ModelForm):
    Password = forms.CharField(widget = forms.PasswordInput())

    class Meta():
         model= User
         fields =('username','email','password')
