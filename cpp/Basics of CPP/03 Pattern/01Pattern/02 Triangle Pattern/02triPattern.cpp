// print:- 
// 1
// 23
// 456
// 78910

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1, count = 1;
    while( i <= N){
        int j = 1;
        while ( j <= i)
        {
            cout<<count;
            count++;
            j++;
        }
        i++;
        cout<<endl;
    }
    return 0;
}
