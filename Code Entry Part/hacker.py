from hackerrank.HackerRankAPI import HackerRankAPI

API_KEY = "hackerrank|1713589-1967|6dece1a695458bf9da0c8461c760b947f4dd54a9"  #your API-KEY here

compiler = HackerRankAPI(api_key = API_KEY)

#print (compiler.supportedlanguages())     #prints a list of supported languages


source ='''
N, M = map(int,raw_input().split()) 
for i in xrange(1,N,2): 
    print (".|."*i).center(M,'-')
    
print "WELCOME".center(M,'-')
for i in xrange(N-2,-1,-2): 
    print (".|."*i).center(M,'-') 
'''

result = compiler.run({'source': source,
                       'lang':'python',
                       'testcases':["9 27"]
                       })
                       
print(result.output[0])