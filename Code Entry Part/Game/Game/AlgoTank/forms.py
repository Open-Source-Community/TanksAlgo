from django import forms
from django.auth.models import User
from AlgoTank.models import UserProfile

class UserForm(forms.ModelForm):
    Password = forms.CharField(widget = forms.PasswordInput())

    class Meta():
         model= User
         fileds =('username','email','password')
