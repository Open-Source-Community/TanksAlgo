#Integrating helper library for HackerRank API
from hackerrank.HackerRankAPI import HackerRankAPI
API_kEY = "hackerrank|1850276-1999|ba2a4949a4b24ec8a3245053cde0e3b53da869e6"
compiler = HackerRankAPI(api_key=API_kEY)

#Sends user's code to API to test against test cases
def Check(src,test_cases,language):
    result = compiler.run({'source': src,
                           'lang': language, 'testcases': test_cases})


    #Returns the received output from HackerRank API
    return result.output
