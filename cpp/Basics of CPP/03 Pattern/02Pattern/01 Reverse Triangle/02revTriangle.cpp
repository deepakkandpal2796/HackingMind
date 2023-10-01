// print:-
//    1
//   12
//  123
// 1234


//! This will teach us how to print spaces...

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin>>N;
//     int i = 1;
//     while(i <= N){
//         int j = 1, spaces = 1;
//         while( spaces <= N - i){
//             cout<<" ";
//             spaces++;
//         }
//         while( j <= i){
//             cout<<j;
//             j++;
//         }
//         cout<<endl;
//         i++;
//     }
//     return 0;
// }

#include <iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cout<<"Number of rows you want to print"<<endl;
    cin>>N;
    for (int i = 1; i <= N; i++)
    {
        int count = 1;
        for (int j = 1 ;  j <= N ; j++)
        {
            if(j <= N - i ){
                cout<<" ";
            }else{
                cout<< count;
                count++;
            }
        }
        cout<<endl;
    }
    
    return 0;
}
