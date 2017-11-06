from problems.forms import Problem_State
from Registration.forms import UserForm
from django.shortcuts import render
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect, HttpResponse, request
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login,logout,authenticate
# Create your views here.

def DisplayProblem():
    return render(request,'problems_app/game.html','problem_dispaly',Problem_State)