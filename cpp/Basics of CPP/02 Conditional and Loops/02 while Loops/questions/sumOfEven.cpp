// Given a number N, print sum of all even numbers from 1 to N.



//# Smart approaach fast approach 
//? start with zero, increase 2 and add every number...

#include<iostream>
using namespace std;


int main(){

    int N, sum = 0;
    cin>>N;
	int i = 0;
    while ( i <= N){
        sum = sum + i;
        i = i + 2;
    }
    
  cout << sum <<endl;
  return 0;
}

//# Basic approach comes in everyones mind 
//? start with 2, check the no is even or not , if even add to the new number...

#include<iostream>
using namespace std;


int main(){

    int N, sum = 0;
    cin>>N;
    
    int i = 2;
    
    while( i <= N){
        if(i % 2 == 0){
        	sum = sum + i;
        }
     	i = i + 1;   
    }
    
  cout << sum <<endl;
    
  return 0;
      
}