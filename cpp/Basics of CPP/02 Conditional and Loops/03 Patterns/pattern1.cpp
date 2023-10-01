//PRINT PATTERN
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int n, i = 1;
    cout<<"Enter n"<<endl;
    cin >> n;
    while ( i <= n){
        int j = 1;
        while(j <= i){
            cout<<j<<" ";
            j = j + 1;
        }
        cout<<endl;
        i = i + 1;
    }
    return 0;
}
