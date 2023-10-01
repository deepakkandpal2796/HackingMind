//Print pattern:

//    1
//   23
//  456
// 78910

//! you can use loop to print space or use if else condition to print space...remember these condition to print spaces it will help a lot...


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int n;
    cout<<"Enter n"<<endl;
    cin>>n;
    //# === first method ===
    // int count = 1;
    // int i = 1;
    // while(i <= n){
    //     int j = 1;
    //     while(j <= n){
    //         if( j <= n - i){
    //             cout<<"  ";
    //         }
    //         else {
    //             cout<<count<<" ";   
    //             count = count + 1;
    //         } 
    //         j = j + 1;
    //     }
    //     cout<<endl;
    //     i = i + 1;
    // }
    //# ===second method ===
        int count = 1;
        int i = 1;
        while ( i <= n){
            int k = 1 ;
            while ( k <= n - i ){
                cout<<" ";
                k = k + 1;
            }
            int j = 1;
            while( j <= i){
                cout<<count;
                j = j+1;
                count = count + 1;
            }
            cout<<endl;
            i = i+1;
        }
    return 0;
}


