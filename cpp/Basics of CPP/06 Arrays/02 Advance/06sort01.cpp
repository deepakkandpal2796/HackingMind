//* You have been given an integer array/list(ARR) of size N that contains only integers, 0 and 1. 
//* Write a function to sort this array/list. 
//* Think of a solution which scans the array/list only once and don't require use of an extra array/list.

//# SAMPLE INPUT 1 -> 0 1 1 0 1 0 1   o/p -> 0 0 0 1 1 1 1
//# SAMPLE INPUT 1 -> 1 0 1 1 0 1 0 1 o/p -> 0 0 0 1 1 1 1 1
//# SAMPLE INPUT 1 ->  0 1 0 1 0      o/p -> 0 0 0 1 1 

//using two pointer approach

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int arr[] = {0, 1, 1, 0, 1, 0, 1, 1};
    int size = sizeof(arr)/sizeof(arr[0]);
    int i = 0, j = size-1;
    while ( i < j ){
        if( arr[i] == 0 ){
            i++;
        }else if( arr[j] == 1){
            j--;
        }else if(arr[i] == 1 && arr[j] == 0){
            swap( arr[i], arr[j]);
            i++;
            j--;
        }
    }
    for (int i = 0; i < size; i++)
    {
        cout<<arr[i]<<"\t";
    }
    
    return 0;
}
