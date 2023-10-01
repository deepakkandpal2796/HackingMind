// print:- 
// 1
// 21
// 321
// 4321

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while( i <= N){
        int j = 1;
        while( j <= i){
            cout<<i+1-j;
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}

//===========ANOTHER LOGIC==========

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin>>N;
//     int i = 1;
//     while( i <= N){
//         int j = i;
//         while( j >= 1){
//             cout<<j;
//             j--;
//         }
//         cout<<endl;
//         i++;
//     }
//     return 0;
// }

//===========BASIC LOGIC==========

// #include<iostream>
// using namespace std;

// int main(int argc, char const *argv[])
// {
//     int N;
//     cin>>N;
//     int i = 1;
//     while( i <= N){
//         int j = 1, count = i;
//         while( j <= i ){
//             cout<<count;
//             count--;
//             j++;
//         }
//         cout<<endl;
//         i++;
//     }
//     return 0;
// }

