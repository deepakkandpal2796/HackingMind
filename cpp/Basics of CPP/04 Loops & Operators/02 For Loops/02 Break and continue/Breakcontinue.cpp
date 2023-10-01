//break and continue

//# =====Break====


//* why we need break :- in my prime number code if we determine that it is a prime number it still goes to check to the last number (n-1) but we have to check to the final number if one of the number divides it.....to make this happen to stop the loop when we got the first number which divides it we use break....

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin >> N;
//     bool isprime = true;
//     for(int i = 2; i < N; i++){
//         if( N % i == 0){
//             isprime = false;
//             break;
//         }
//     }
//     if(isprime){
//         cout<<"Is prime";
//     }else{
//         cout<<"Not prime";
//     }
//     return 0;
// }

//what break did is 'uske bhar' jo bhi loop hoga vi usi vkt band ho jayega...


//* print triangle pattern using square loop 


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin >> N;
//     for (int i = 1; i <= N ; i++)
//     {
//         for (int j = 1; j <= N; j++)
//         {
//             if( j > i){
//                 break;
//             }
//             cout<<j;
            
//         }
//         cout<<endl;
//     }
    
//     return 0;
// }


//# =====Continue====

//it didnt break the loop it just skip that itration and move to the next one...

//in while loop the loop become infinite check in the video before making notes...

//*diff between while and for loop using continue statement

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin >> N;
    int a = 1;
    while( a < N){
        if( a == 7){
            // a++;  if you dont use this the loop become infinite at a = 7 in while loop....because after the continue statement nothing below it will excuted hence the increment part is also not working so a will remain 7 and this loop goes to infinity.. 
            continue;
        }
        cout<<a<<endl;
        a++;
    }


    for (int i = 1; i <= N ; i++)
    {
        if ( i == 3 ){
            // in for loop even though the increment works at then end of every ittration , and even we are using continue statement...i moves to the next itration
            continue;
        }
        cout<<i<<endl;
    }
    
    return 0;
}