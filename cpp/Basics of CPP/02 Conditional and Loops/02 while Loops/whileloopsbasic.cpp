// Basic while loop 

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int n;
    cout<<"Enter the number "<<endl;
    cin>>n;

    //print natural number till n 
    int i = 1;
    while(i <= n){
        cout<<i<<endl;
        i = i+1;
    }

    // check the number is prime or not

    int d = 2;
    bool notPrime = false; //it is not compulasary, u can also use the condition when d == n then print prime...whatever u like....
    //we have to make a case for n == 1 and remember that the cout<<"Prime"<<endl; conditon should be inside the else case...otherwise the "prime" will be print if n = 1, as notprime will be false when n = 1....
    if (n == 1){
        cout<<"Neither prime nor composite"<<endl;
    }
    else{
     while ( d < n ){
        if( n % d == 0 ){
            cout<<"Not prime"<<endl;
            notPrime = true;
            break; //why break is needed -> lets say if i have taken 12 then every time d divides 12,  not prime will print, and hence not prime will print 3 time in case of 12...we want it only one time ??
            //what does break do -> it breaks the loop 
        }
        d = d + 1;
     }

        if(!notPrime){
            cout<<"Prime"<<endl;
        }
    }
    return 0;
}

// Above method is unnecessarly complex but this is easy to understand why we are using the break statement....the following method is easy to understand;




//Prime or not easy and smart approach

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int n, i = 2;
//     cin>>n;
//     bool isPrime = true;
//     if(n == 1){
//         cout<<"1 is not prime or composite "<<endl;
//     }else{
//         while (i < n)
//         {
//             if(n % i == 0){
//                 isPrime = false;
//             }
//             i++;
//         }
//         if(isPrime){
//             cout<<"Number is prime"<<endl;
//         }else{
//             cout<<"Number is not prime"<<endl;
//         }
        
//     }
//     return 0;
// }


// using i == n logic

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int n, i = 2;
//     cin>>n;
//     if(n == 1){
//         cout<<"1 is not prime or composite "<<endl;
//     }else{
//         while (i < n)
//         {
//             if(n % i == 0){
//                 break;
//             }
//             i++;
//         }
//         if(i == n){
//             cout<<"Number is prime deepak"<<endl;
//         }else{
//             cout<<"Number is not prime deepak"<<endl;
//         }
        
//     }
    
//     return 0;
// }
