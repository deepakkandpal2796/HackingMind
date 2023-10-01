#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int age = 21;
    bool is_adult  = true;
    float pie = 3.14;
    double big_pie = 3.1415926535;
    char sign = '@'; // single inverted commas
    char a = 'A';


    cout<< sizeof(age) << " Bytes" << endl;
    cout<< sizeof(is_adult)  << " Bytes" << endl;
    cout<< sizeof(pie)  << " Bytes" << endl;
    cout<< sizeof(big_pie)  << " Bytes" << endl;
    cout<< sizeof(sign)  << " Bytes" << endl;
    cout<< sizeof(a)  << " Bytes" << endl;

    return 0;
}

// o/p:-
// 4 Bytes
// 1 Bytes
// 4 Bytes
// 8 Bytes
// 1 Bytes
// 1 Bytes