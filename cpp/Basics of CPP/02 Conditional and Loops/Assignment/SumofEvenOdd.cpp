// Write a program to input an integer N and print the sum of all its even digits and sum of all its odd digits separately.
// Digits mean numbers, not the places! That is, if the given integer is "13245", even digits are 2 & 4 and odd digits are 1, 3 & 5.
// Constraints
// 0 <= N <= 10^8
#include<iostream>
using namespace std;

int main() {
	int N;
    cout<<"Enter the Number"<<endl;
    cin>>N;
    int sumEven = 0, sumOdd = 0;
	while(N>0){
        int num = N % 10;
        N = N/10;
        if(num%2==0){
            sumEven = sumEven + num;
        }else{
            sumOdd = sumOdd + num;
        }
    }
    cout<<sumEven<<" "<<sumOdd<<endl;
    return 0;
}

