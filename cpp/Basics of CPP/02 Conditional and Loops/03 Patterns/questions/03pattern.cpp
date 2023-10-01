//Print :- 

// _ _ _ *
// _ _ * * *
// _ * * * * * 
// * * * * * * *

//where _ denotes the spaces 

#include<iostream>
using namespace std;


int main(){
    
	int N;
    cout<<"Enter the number"<<endl;
    cin>>N;
    int i = 1;
    while ( i <= N){  
        int k = 1;
        while (k <= N - i ){   
            cout<<" ";
            k = k + 1;
        }
        int j = 1;
        while ( j <= i){
            cout<<"*";
            j = j + 1;
        }
        int l = 2;
        while ( l <= i){
            cout<<"*";
            l = l + 1;
        }
	cout<<endl;
    i = i + 1;
    }
  return 0;
}


