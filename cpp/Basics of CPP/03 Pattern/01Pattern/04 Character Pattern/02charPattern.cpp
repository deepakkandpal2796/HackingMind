// print:- 

// ABCD
// BCDE
// CDEF
// DEFG

#include <iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while (i <= N){
        int j = 1;
        char ch = 'A'+i-1;
        while ( j <= N)
        {
            char newch = ch + j - 1;
            cout<<newch;
            j++;
        }
        i++;
        cout<<endl;
    }
    return 0;
}
