//* Comparision/Relational operator
// == , ===, !=, <=, >=, <, >

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int a, b;
    cout<<"Enter a and b"<<endl;
    cin>>a>>b;
    bool isEqual = (a == b);
    bool isAGreater = (a > b);
    bool isASmaller = (a < b);
    cout<<"0 is false 1 is true in boolean"<<endl;
    cout<< "Both are equal "<< isEqual << endl;
    cout<< "A is Greater "<< isAGreater << endl;
    cout<< "B is Greater "<< isASmaller << endl;
    return 0;
}

//# logical operator
// -> And (&&) or (||) not(!) we will study these ahead same as the and,  or , not gate...

// true || true = true 
// true || false = true 
// false || true = true 
// false || false = false

// true && false = false
// flase && true = false
// false && false = false
// true && true = true