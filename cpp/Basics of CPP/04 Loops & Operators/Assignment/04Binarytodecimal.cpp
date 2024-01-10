// Given a binary number as an integer N, convert it into decimal and print.

// Sample Input 1 :
// 1100
// Sample Output 1 :
// 12
// Sample Input 2 :
// 111
// Sample Output 2 :
// 7

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int n, bit, decimal = 0, pow = 1;
    cin>>n;
    while ( n > 0){
        bit = n % 10;
        decimal += (bit * pow) ;
        pow *= 2;
        n = n / 10;
    }
    cout<<decimal<<endl;
    return 0;
}


// logic:- 

// first we have to remove the last bit of the binary no.
// then multipy it with its respective 2 power(fir 1st place 2^0 then 2^1,2^2 and so on)
// then add this to the result of previous bit
// 1 0 1 1
// 1*2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 11

// pow = 1
//remove last bit n % 10
//make decimal to store final result and (bit * pow) + last decimal 
// then pow *= 2 at every iteration   
//update n by n / 10