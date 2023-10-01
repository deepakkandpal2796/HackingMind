// print:- 
// 4321
// 4321
// 4321
// 4321


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = N;
    while( i > 0){
        int j = N;
        while( j > 0){
            cout<<j;
            j--;
        }
        cout<<endl;
        i--;
    }
    return 0;
}


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin>>N;
//     int i = 1;
//     while( i <= N){
//         int j = 1, count = N;
//         while( j <= N){
//             cout<<count;
//             count--;
//             j++;
//         }
//         cout<<endl;
//         i++;
//     }
//     return 0;
// }

