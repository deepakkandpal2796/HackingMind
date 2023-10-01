// Write a program to find x to the power n (i.e. x^n). Take x and n from the user. You need to print the answer.
// Note : For this question, you can assume that 0 raised to the power of 0 is 1
// Output Format :
// x^n (i.e. x raise to the power n)
// Constraints:
// 0 <= x <= 8 
// 0 <= n <= 9

#include<iostream>
using namespace std;

int main() {
	int x, n, sol = 1;
    cin>>x>>n;
    int i = 1;
    while( i <= n){
         sol = sol * x;
         i = i + 1; 
    }
    cout<<sol;
	return 0;
}
// look at the case where x and n are 0;