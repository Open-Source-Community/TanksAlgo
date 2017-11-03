from django import forms
from problems.models import Problems
# Create your views here.

class Problem_solve(forms.modelform):
    CodeInput = TextField()
    Code_Lang = CharField()#choice
