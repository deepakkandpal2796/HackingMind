// print :-
//     1
//    121 
//   12321
//  1234321
// 123454321


#include<iostream>
using namespace std;
 int main(int argc, char const *argv[])
 {
     int N;
     cin>>N;
     int i = 1;
     while ( i <= N){
         int j = 1, sp = 1;
         while ( sp <= N - i){
             cout<<" ";
             sp++;
         }
         while( j <= i){
             cout<<j;
             j++;
         }
         int l = i - 1;
         while(l >= 1){
             cout<<l;
             l--;
         }
         cout<<endl;
         i++;
     }
     return 0;
 }
 
 

// #include<iostream>
// using namespace std;
//  int main(int argc, char const *argv[])
//  {
//      int N;
//      cin>>N;
//      int i = 1;
//      while ( i <= N){
//          int j = 1, sp = 1, l = 1;
//          while ( sp <= N - i){
//              cout<<" ";
//              sp++;
//          }
//          while( j <= i){
//              cout<<j;
//              j++;
//          }
//          while(l <= i - 1){
//              cout<<i-l;
//              l++;
//          }
//          cout<<endl;
//          i++;
//      }
//      return 0;
//  }



