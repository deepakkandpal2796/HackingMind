#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{

    //Two numbers are equal or not 
    int a, b;
    cout<<"Enter two numbers "<< endl;
    cin>>a>>b;

    //#only if
    
    // if( a == b){
    //     cout<<"They both are equal"<<endl;
    // }

    //# ==== if and else

    // if( a == b){
    //     cout<<"They both are equal"<<endl;
    // }else{
    //     cout<<"They are not equal"<<endl;
    // }

    //# ====variation in if and else ====

    //* tell the greater number ==> Nested if else
    // if( a == b){
    //     cout<<"They both are equal"<<endl;
    // }
    // else {
    //     if(a > b){
    //         cout<<"First number is greater"<<endl;
    //     }else{
    //         cout<<"Second number is greater"<<endl;
    //     }
    // }

    //* using else if

    if( a == b){
        cout<<"They both are equal"<<endl;
    }
    else if(a > b){
        cout<<"First number is greater"<<endl;
    }
    else{
        cout<<"Second number is greater"<<endl;
    }

    return 0;
}
