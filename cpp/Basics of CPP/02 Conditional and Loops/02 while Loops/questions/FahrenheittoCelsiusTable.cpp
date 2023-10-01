// Fahrenheit to Celsius Table
// Given three values - Start Fahrenheit Value (S), End Fahrenheit value (E) and Step Size (W), you need to convert all Fahrenheit values from Start to End at the gap of W, into their corresponding Celsius values and print the table.

// Constraints :
// 0 <= S <= 80
// S <= E <=  900
// 0 <= W <= 40 


// Sample Input 1:
// 0 
// 100 
// 20

// Sample Output 1:
// 0   -17
// 20  -6
// 40  4
// 60  15
// 80  26
// 100 37

#include<iostream>
using namespace std;


int main(){

	int S, E, W;
    cin>>S>>E>>W;
    int i = S;
    while(i <= E){
        int cel = (i - 32)* (5.0/9);
        cout<<i<<"\t"<<cel<<endl;
        i = i + W;
    }
    return 0;
}