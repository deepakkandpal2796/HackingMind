// Given an array of length N, you need to find and print the sum of all elements of the array.
// Input Format :
// Line 1 : An Integer N i.e. size of array
// Line 2 : N integers which are elements of the array, separated by spaces
// Output Format :
// Sum
// Sample Input :
// 3
// 9 8 9
// Sample Output :
// 26
#include<iostream>
#include<climits>
using namespace std;
int main()
{
    cout<<"Enter the number you want to enter in an array"<<endl;
    int N, sum = 0;
    cin>>N;
    int arr[100000];
    //to take input in array with help of index
    cout<<"Enter the elements"<<endl;
    for(int i = 0; i < N; i++){
        cin>>arr[i];
        sum = sum + arr[i];
    }
    cout<<sum<<endl;
    return 0;
}

