//* Push Zeros to end
//?You have been given a random integer array/list(ARR) of size N. 
//? You have been required to push all the zeros that are present in the array/list to the end of it. 
//? Also, make sure to maintain the relative order of the non-zero elements.

//* Sample Input 1:
//* 2 0 0 1 3 0 0
//* Sample Output 1:
//* 2 1 3 0 0 0 0

//* Sample Input 2:
//* 0 3 0 2 0
//* Sample Output 2:
//* 3 2 0 0 0

//* Sample Input 3:
//* 9 0 0 8 2
//* Sample Output 3:
//* 9 8 2 0 0 


//# approch 2 pointer bnao i and j 
//# when element zero nhi ho to ek pointer aage badha do or dusre ko vhi rakh do 
//# and jab 1st pointer = 0 and 2nd is not zero then swap..

//# optimise approach code this in 5 lines

#include<iostream>
using namespace std;

//# Basic approach 2 pointer approch but lengthy code

// void pushToZeros(int input[], int size){
//     int i = 0;
//     int j = 0;
//     while (i < size){
//         if(input[i] != 0 && input[j] != 0){
//             i++;
//             j++;
//         }else if(input[i] == 0){
//             i++;
//         }else if( input[i] != 0 && input[j] == 0){
//             swap(input[i], input[j]);
//             i++;
//             j++;
//         }
//     }
   
    
//      for (int i = 0; i < size; i++)
//     {
//         cout<<input[i];
//     }
// }

//# ye same upper wali function ko 5 line me likha hai same 2 pointer approach

void pushToZeros(int input[], int size){
    int i = 0;
    for (int j = 0; j < size ; j++)
    {
        if(input[j] != 0){
            swap(input[i], input[j]);
            i++;
        }
    }
    
}

int main(int argc, char const *argv[])
{
    int arr[100];
    int size;
    cout<<"Enter the size of the array : "<<endl;
    cin>>size;
    cout<<"Enter the array : "<<endl;
    for (int i = 0; i < size; i++)
    {
        cin>>arr[i];
    }
    pushToZeros(arr, size);
    return 0;
}
