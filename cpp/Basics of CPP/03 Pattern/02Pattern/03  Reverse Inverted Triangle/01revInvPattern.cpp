// print :-
// *****
//  ****
//   ***
//    **
//     *

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin>>N;
//     int i = 1;
//     while( i <= N){
//         int stars = N - i + 1, spaces = i - 1;
//         while( spaces >= 1){
//             cout<<" ";
//             spaces--;
//         }
//         while( stars >= 1){
//             cout<<'*';
//             stars--;
//         }
//         i++;
//         cout<<endl;
//     }
//     return 0;
// }

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    for( int i = 1; i <= N; i++){
        int k = 1;
       for(int j = 1; j <= N; j++){
        if( k < i ){
            cout<<" ";
            k++;
        }else{
            cout<<"*";
        }
       }
       cout<<endl;
    }
    return 0;
}

