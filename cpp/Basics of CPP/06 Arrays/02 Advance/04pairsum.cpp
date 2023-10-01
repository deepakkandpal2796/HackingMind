//? You have been given an integer array/list(ARR) and a number X. 
//? Find and return the total number of pairs in the array/list which sum to X.

// sample input 1 - arr =  {1 3 6 2 5 4 3 2 4} and  x = 7  o/p -> 7
// sample input 1 - arr = {1 3 6 2 5 4 3 2 4} and  x = 12  o/p -> 0
// sample input 1 - arr = {2 8 10 5 -2 5} and  x = 10  o/p -> 2
       

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int arr[] = {1, 3, 6, 2, 5, 4, 3, 2, 4};
    int x = 7;
    int count = 0;
    for(int i = 0; i < sizeof(arr)/sizeof(arr[0]) - 1; i++){
        for(int j = i + 1; j < sizeof(arr)/sizeof(arr[0]); j++){
            if( arr[i] + arr[j] == x){
                count++;
            }
        }
    }
    cout<<count<<endl;

    return 0;
}
