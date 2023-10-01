#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int n;
    cout<<"Enter the number "<<endl;
    cin>>n;
    if (n % 2 == 0){
        cout<<"Even"<<endl;
    }
    //! Remember if there are 2 if satisfied then it will execute both the ifs......... but if there are one if and one else if, and both if and else if condition satisfied then only if will be executed....else if only get executed when if will not be executed....
    // if( n == 2){
    //     cout<<"namaste"<<endl;  
    // }

    // else if( n == 2){
    //     cout<<"namaste"<<endl;  
    // }

    else{
        cout<<"Odd"<<endl;
    }
    return 0;
}
