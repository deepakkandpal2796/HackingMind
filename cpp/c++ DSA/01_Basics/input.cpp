#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number "<<endl;
    cin>>n;
    cout<<"The number you have entered is "<<n<<endl;
    
    //important question in MCQ in interview
    //! Here it will take input and if the input value is true then Deepak will print 
    if(cin>>n){
        cout<<"Deepak"<<endl;
    }
    //important question in MCQ in interview
    //! Here the cout value is Deepak which is true hence it will work
    if(cout<<"Deepak "){
        cout<<"kandpal";
    }

    return 0;
}