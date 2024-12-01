#include<iostream>
using namespace std;

void increment (int a , int b[]){
    a++;
    b[0]++;
} 

int main(){
    int a = 12;
    int b[10] = {1, 2, 3};
    increment(a, b);
    cout << a << endl;
    cout << b <<endl;
    return 0;
}


