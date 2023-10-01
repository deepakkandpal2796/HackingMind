// print :- 

// E 
// DE 
// CDE 
// BCDE 
// ABCDE

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while( i <= N){
        int j = 1;
        char ch = 'A' + N - i;
        while ( j <= i){
            char newch = ch + j - 1;
            cout<<newch;
            j++;
        }
        i++;
        cout<<endl;
    }
    return 0;
}
