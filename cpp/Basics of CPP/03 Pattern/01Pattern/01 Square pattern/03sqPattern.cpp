// print:- 
// 1234
// 1234
// 1234
// 1234

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while( i <= N){
        int j = 1;
        while ( j <= N)
        {
            cout<<j;
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}


