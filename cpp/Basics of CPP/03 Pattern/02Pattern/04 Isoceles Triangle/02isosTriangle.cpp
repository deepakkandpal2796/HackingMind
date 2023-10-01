// print :-
//     *
//    ***
//   ***** 
//  *******
// *********

#include<iostream>
using namespace std;
 int main(int argc, char const *argv[])
 {
     int N;
     cin>>N;
     int i = 1;
     while( i <= N){
         int j = 1, sp = 1;
         while ( sp <= N - i){
             cout<<" ";
             sp++;
         }
         while( j <= i){
             cout<<'*';
             j++;
         }
        // int l = i - 1;
        // while( l >= 1){
        //     cout<<'*';
        //     l--;
        // }
        int l = 2;
        while( l <= i){
            cout<<'*';
            l++;
        }
        i++;
        cout<<endl;
     }
     return 0;
 }
 