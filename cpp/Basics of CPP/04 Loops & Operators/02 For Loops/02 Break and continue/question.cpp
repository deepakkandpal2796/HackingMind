// Given an integer N, print all the prime numbers that lie in the range 2 to N (both inclusive).

#include <iostream>
using namespace std;

int main(){

    int N;
    cin>>N;
    for(int i = 2; i <= N; i++){
        bool isprime = true;
        for( int j = 2 ; j < i ; j++ ){
            if( i % j == 0){
                isprime = false;
                break;
            }
        }
        if(isprime){
            cout<<i<<endl;
        }
    }
  return 0;
}


