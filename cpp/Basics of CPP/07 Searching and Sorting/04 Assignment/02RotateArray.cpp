//# Rotate array 

//? You have been given a random integer array/list(ARR) of size N.
//? Write a function that rotates the given array/list by D elements(towards the left).

//* Sample Input 1:
//* 1 2 3 4 5 6 7
//* 2
//* Sample Output 1:
//* 3 4 5 6 7 1 2

//* Sample Input 2:
//* 1 2 3 4 5 6 7
//* 0
//* Sample Output 2:
//* 1 2 3 4 5 6 7

//* Sample Input 3:
//* 1 2 3 4
//* 2
//* Sample Output 3:
//* 3 4 1 2

#include<iostream>
using namespace std;
#include "02Rotatesolution.h"

int main(int argc, char const *argv[])
{
    int arr[100];
    int size, rotate;
    cout<<"Enter the size of the array : "<<endl;
    cin>>size;
    cout<<"Enter the array : "<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>arr[i];
    }
    cout<<"Enter the postion to roatate : "<<endl;
    cin>>rotate;
    // rotateArray(arr, size, rotate);
    cout<<endl;
    rotateArray2(arr, size, rotate);
    return 0;
}
