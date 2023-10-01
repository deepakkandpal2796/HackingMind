#include<iostream>
using namespace std;
int main(){
    int resultRor = 15 | 30;
    int resultAnd = 15 & 30;
    int rnot = ~15;
    int rxor = 15 ^ 30;
    int rlshift = 15 << 2;
    int rrshift = 15 >> 2;
    cout<<resultRor<<endl<<resultAnd<<endl<<rnot<<endl<<rxor<<endl<<rlshift<<endl<<rrshift<<endl;
    return 0;
}