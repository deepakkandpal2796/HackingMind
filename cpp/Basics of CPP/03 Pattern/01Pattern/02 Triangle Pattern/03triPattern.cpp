// print:-
// 1
// 23
// 345
// 4567


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while(i <= N){
        int j = 1, val = i;
        while(j <= i){
            cout<<val;
            val++;
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}
