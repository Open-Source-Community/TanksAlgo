from django.shortcuts import render
from problems.models import Problems,Test_cases,Result
from problems.Code_Checker import Check

# Renders problem.html
def Show_Problem(request):
    #Fetches problem statement of the first problem in DB
    problem_statement = Problems.objects.only()[1].problem_statement
    test_result = ""

    # Receives user's code and returns checker function result
    if request.method == 'POST':
        #Fetches user's choosen language
        language = request.POST.get('lang', None)
        #Fetches user's problem solution
        user_solution = request.POST.get('user_solution', None)

        # Sample test cases are used for testing
        test_result = 'TestCase 1: ' + Check(user_solution,["1","2"],language)[0] +\
               'TestCase 2: ' + Check(user_solution,["1","2"],language)[1]

    return render(request, 'problems_app/problem.html',
                  {'problem_statement': problem_statement,'test_result':test_result})