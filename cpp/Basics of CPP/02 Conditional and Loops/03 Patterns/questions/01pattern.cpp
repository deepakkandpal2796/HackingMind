// Print :- 

// 1
// 23
// 345
// 4567

#include<iostream>
using namespace std;


int main(){

   int N;
    cout<<"Enter a number "<<endl;
    cin>>N;
   int count = 1;
    int i = 1;
    while(i <= N){
        int j = 1;
        count = i;
        while(j <= i){ 
            cout<<count;
            j = j+1;
            count = count + 1;
        }
      cout<<endl;
      i=i+1;  
    }
   return 0; 
}