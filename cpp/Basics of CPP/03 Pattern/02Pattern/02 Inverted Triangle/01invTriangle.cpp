// ****
// ***
// **
// *

// #include<iostream>
// using namespace std;
//  int main(int argc, char const *argv[])
//  {
//      int N;
//      cin>>N;
//      int i = 1;
//      while( i <= N){
//          int j = N - i + 1;
//          while( j >= 1){
//              cout<<'*';
//              j--;
//          }
//          i++;
//          cout<<endl;
//      }
//      return 0;
//  }
 
 #include <iostream>
 using namespace std;
 int main(int argc, char const *argv[])
 {
    int N;
    cin>>N;
    for (int i = 1; i <= N; i++)
    {
        for (int j = N;  j >= i ; j--)
        {
           cout<<"*";
        }
        cout<<endl;
    }
    
    return 0;
 }
 