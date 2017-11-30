from django.shortcuts import render
from problems.models import Problems,Test_cases,Result
from problems.Problem_Handler import *
import json

# Renders problem.html
def Show_Problem(request):
    H = Handler()
    #Using Handler.Problem_Random to intialize 'Handler' attributes
    H.Problem_Random()
    problem_statement = H.problem_statement
    #Converting test cases from string to list
    test_case = json.loads(H.test_case)
    test_result = ""

    # Receives user's code and returns Code_Check function result
    if request.method == 'POST':
        language = request.POST.get('lang', None)                  #Fetches user's choosen language
        user_solution = request.POST.get('user_solution', None)    #Fetches user's problem solution

        output = Handler.Code_Check(user_solution, test_case, language, 'output')
        test_result = 'TestCase 1: ' + output[0] + ' TestCase 2: ' + output[1]

    return render(request, 'problems_app/problem.html',
                  {'problem_statement': problem_statement,'test_result':test_result})