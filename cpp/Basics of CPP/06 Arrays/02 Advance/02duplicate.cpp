//? You have been given an integer array/list(ARR) of size N which contains numbers from 0 to (N - 2). 
//? Each number is present at least once. That is, if N = 5, 
//? the array/list constitutes values ranging from 0 to 3 and among these, 
//? there is a single integer value that is present twice. 
//? You need to find and return that duplicate number present in the array.

//SAMPLE INPUT 1 -  {0 7 2 5 4 7 1 3 6 } .....  o/p -> 7 3 1
//SAMPLE INPUT 2 -  {0 2 1 3 1} ..... o/p -> 1
// SAMPLE INPUT 3 - {0 3 1 5 4 3 2} .... o/p -> 3


//concept : - for this particular question if their are n element in the array 
// then n-1 natural numbers so we can do a thing that first make XOR of the array
// then XOR till n-1 we got the unique number ...

//eg -> (0 ^ 7 ^ 2 ^ 5 ^ 4 ^ 7 ^ 1 ^ 3 ^ 6) size 
//   -> (0 ^ 7 ^ 2 ^ 5 ^ 4 ^ 7 ^ 1 ^ 3 ^ 6) ^ (0 ^ 1 ^ 2 ^ 3 ^ 4 ^ 5 ^ 6 ^ 7) size - 1 


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int arr[] = {0, 7, 2, 5, 4, 7, 1, 3, 6};
//     int size = sizeof(arr)/sizeof(arr[0]);
//     int ans = 0;
//         for(int i = 0; i < size ; i++){
//             ans = ans^arr[i];
//         }
//         for(int i = 0; i < size - 1 ; i++){   
//             ans = ans^i;
//         }
//         cout<<ans<<endl;
//  return 0;
// }




//* if generally you have to find the duplicate then 


// TYPE 2 ->  Here we dont have any condtion about natural number and all, we can have as many as duplicate number and no condition about the numbers are natural number . 
// SAMPLE INPUT - {0, 17, 12, 25, 24, 17, 1, 33, 6, 33, 1} .....  o/p -> 17  1 33

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int arr[] = {0, 17, 12, 25, 24, 17, 1, 33, 6, 33, 1};
    int size = sizeof(arr)/sizeof(arr[0]);
    for(int i = 0;  i < size - 1; i++){
        for( int j = i + 1; j < size; j++){
            if( arr[i] == arr[j]){
                cout<<arr[i]<<"\t";
            }
        }
    }
    return 0;
}