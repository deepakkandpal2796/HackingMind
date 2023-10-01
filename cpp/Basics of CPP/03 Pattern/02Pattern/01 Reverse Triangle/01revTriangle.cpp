// print :-
//     *
//    **
//   ***
//  ****
// *****

//! This will teach us how to print spaces...

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while(i <= N){
        int star = 1, spaces = 1;
        while( spaces <= N - i){
            cout<<" ";
            spaces++;
        }
        while( star <= i){
            cout<<'*';
            star++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}
