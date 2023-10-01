// print:- 
// 1111
// 2222
// 3333
// 4444

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while( i <= N){
        int j = 1;
        while( j <= N){
            cout<<i;
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}
