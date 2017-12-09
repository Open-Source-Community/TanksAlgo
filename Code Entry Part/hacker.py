from hackerrank.HackerRankAPI import HackerRankAPI

API_KEY = "hackerrank|1713589-1967|6dece1a695458bf9da0c8461c760b947f4dd54a9"  #your API-KEY here

compiler = HackerRankAPI(api_key = API_KEY)

#print (compiler.supportedlanguages())     #prints a list of supported languages


source ='''
x = input()
x= int(x)
for j in range(0,10000000):
    x=x
    
print(x*2)
'''

lan = "python3" 
tes = ["10" , "20"]
result = compiler.run({'source': source,
                       'lang':lan,
                       'testcases':tes
                       })

            
print(result.output , result.time )