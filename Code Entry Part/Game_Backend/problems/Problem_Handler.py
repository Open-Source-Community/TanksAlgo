from hackerrank.HackerRankAPI import HackerRankAPI  # Adding helper library for HackerRank API
from random import randint
from problems.models import Problems,Test_cases,Result

class Handler:
    problem_statement = -1
    test_case = -1
    #Chooses a random problem from DB if no problem id specified
    def Problem_Random(self,problem_id = -1):
        if problem_id == -1:
            index = randint(0, Problems.objects.count() - 1)
        else:
            index = problem_id
        self.problem_statement = Problems.objects.only()[index].problem_statement
        self.test_case = Test_cases.objects.only()[index].test_cases

        return

    # Sends user's code to API to test it against test cases
    def Code_Check(src, test_cases, language, expected_return):
        API_kEY = "hackerrank|1850276-1999|ba2a4949a4b24ec8a3245053cde0e3b53da869e6"
        compiler = HackerRankAPI(api_key=API_kEY)

        result = compiler.run({'source': src,
                               'lang': language, 'testcases': test_cases})

        # Returns the received data from HackerRank API
        if expected_return == 'all':
            return result
        elif expected_return == 'output':
            return result.output
        elif expected_return == 'message':
            return result.message
        elif expected_return == 'time':
            return result.time
