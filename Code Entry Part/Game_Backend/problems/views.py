from django.shortcuts import render
from problems.models import Problems,Test_cases,Result

# Renders problem statement html
def Show_Problem(request):
    problem_statement = Problems.objects.only()[1].problem_statement

    # Receives user's code and calls the checker function
    #if request.method == 'POST':

    user_solution = request.POST.get('user_solution', None)

    return render(request, 'problems_app/problem.html',
                  {'problem_statement': problem_statement,'user_solution': user_solution})