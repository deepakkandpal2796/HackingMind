// print:- 
// * * * 1
// * * 2 3
// * 4 5 6
// 7 8 9 10

// where * denotes the space

#include<iostream>
using namespace std;


int main(){

    int N;
    cout<<"Enter a number"<<endl;
    cin>>N;
    int i = 1;
    while (i <= N){
        int count = i;
        int j = 1;
        while (j <= N){
            if( j <= N-i){
                cout<<" ";
            }
            else{
                cout<<count;
                count = count + 1;
            }
            j = j + 1;
        }
        cout<<endl;
        i = i + 1;
    }
  return 0;
}