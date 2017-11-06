from django import forms
from problems.models import Problems,Result,Test_cases

# Create your views here.

class Problem_solve(forms.ModelForm):
    CodeInput = forms.TextInput()
    Code_Lang = forms.CharField()#choice


class Problem_State(forms.ModelForm):
     problem = forms.Textarea(problem_statement)