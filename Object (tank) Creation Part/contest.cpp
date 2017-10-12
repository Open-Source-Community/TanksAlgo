// Example program
#include <iostream>
#include <string>

using namespace std; 

int main()
{
int testcases , teamsnumber ; 
cin>>testcases; 
string name; 
int score;
int tempmax=0; 
string tempcountry ; 

for (int i=0; i<testcases; i++)
{
cin>>teamsnumber; 

for (int j=0; j<teamsnumber ; j++)
{    
cin>>name; 
cin>>score; 
if(tempmax<score)
{
 tempcountry = name;   
}
}
cout<<tempcountry<<endl;
}
}
