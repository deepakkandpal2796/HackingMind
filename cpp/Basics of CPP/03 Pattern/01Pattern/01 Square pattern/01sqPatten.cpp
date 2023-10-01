//* to print pattens we should focous on three things....
// 1:- How many rows....2:- how many coloumns are there ....3:-  what to print??


// square pattern :- now of 
// print :-    ****
//             ****
//             ****
//             ****


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while ( i <= N)
    {
        int j = 1;
        while( j <= N){
            cout<<'*';
            j++;
        }
        i++;
        cout<<endl;
    }
    
    return 0;
}
