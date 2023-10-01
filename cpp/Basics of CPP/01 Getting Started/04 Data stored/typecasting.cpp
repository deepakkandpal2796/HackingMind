#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int a;
    char c;
    a = 100;
    c = a;
    cout<< c << endl; // o/p:- d --> ascii value of d is 100

    int var1 = 1990;
    char var2;
    var2 = var1;
    cout << var2 << endl; // 1990 is more than 1 byte, so var2 will take only the last byte of the var1.......o/p:- ? (it may be the ascci value of ? or a symbol that compiler can't print so it will print ?)

    char var3 = 'y';
    int var4;
    var4 = var3;
    cout<< var4 << endl; //o/p:- 121 ascii value of y is 121...

    float var5 = 1.2;
    int var6;
    var6 = var5;
    cout<<var6<<endl; //o/p:- it will only take the integer value as var6 is an integer...

    int i = 10;
    char ch = 'a';
    int o = i + ch;  // ascii vaule of a = 97 so 97 + 10 = 107 
    cout << o << endl; //o/p:- 107
    char k = i + ch; // k has 107 ascii value..
    cout << k << endl; // o/p:- k
    
    return 0;
}
