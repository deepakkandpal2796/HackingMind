// print:- 
//    1
//   232
//  34543
// 4567654

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while( i <= N){
        int j = 1, sp = 1, ch = i;
        while ( sp <= N - i){
            cout<<" ";
            sp++;
        }
        while( j <= i){
            cout<<ch;
            ch++;
            j++;
        }
        int l = 2;
        int ch2 = ((2*i) - 2) ;
        while ( l <= i){
            cout<<ch2;
            ch2--;
            l++;
        }
        cout<<endl;
        i++;

    }
    return 0;
}
