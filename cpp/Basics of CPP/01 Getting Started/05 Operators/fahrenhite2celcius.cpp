#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    //* Arithmatic Operator

    int f;
    cout<<"Enter the value of fahrenheit"<< endl;
    cin>>f;
    int c;

    //# c = (5/9) * (f - 32); --> wrong approach
    // this will give us Zero as output because 5/9 is 0.5 but the compiler compiles integer / integer into a integer so 0.555 is converted to 0.....
    c = (5.0/9) * (f - 32); // float / integer is float => 5.0/9 = 0.555 * (f-32) ---> but the whole result will store as the integer....
    //# c = (5 *(f - 32))/9 --> we can also do that 
    cout << c << endl;

    int a = 6, b =4;
    double d = a/b;
    cout<<d<<endl; //* here we can clearly see that we are storing the 6/4 result in a double but as it is integer / integer it will still not giving us the answer in the form of double it will give 1 as the output...

    // double d = 55.5;
    // d = (d % 10);
    // cout<<d<endl;
    // error: invalid operands to binary expression ('double' and 'int')
    // The remainder operator (otherwise known as the modulo operator) % is a binary operator (i.e., takes exactly 2 operands) and operates only on integer types (e.g., short, int, long, long long, etc).
    // It appears from the error message that the variable d is of type double and 10 is int,  This "d" values is the main cause for the error.

    return 0;

    //! integer / integer = integer , float / integer = float , double / integer = double...  dosent matter you are storing integer / interger in double it will give you the out as integer...



}
