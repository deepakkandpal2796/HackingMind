// Given a number N, find its square root. You need to find and print only the integral part of square root of N.
// For eg. if number given is 18, answer is 4.

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int n, sqRoot = 0, sq = 1;
    cin>>n;
    for(int i = 1; sq < n; i++){
        sq = i * i;
        // cout<<sq<<endl;
        sqRoot = i ;
        // cout<<sqRoot<<endl;
    }
    cout<<sqRoot<<endl;
    return 0;
}
