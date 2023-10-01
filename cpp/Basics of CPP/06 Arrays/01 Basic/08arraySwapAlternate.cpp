// You have been given an array/list(ARR) of size N. You need to swap every pair of alternate elements in the array/list.

// Sample Input 1:
// 1
// 6
// 9 3 6 12 4 32
// Sample Output 1 :
// 3 9 12 6 32 4


#include<iostream>
using namespace std;

//print function
void printArr(int input[], int n){
    for (int i = 0; i < n; i++)
   {
       cout<<input[i]<<" "; 
   }
    cout<<endl;
    
}

void alternateReverse(int arr[], int n){
    int i = 0, j = 1;
    while (j < n){
        int temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i = i + 2;
        j = j + 2;
        }

}
int main(int argc, char const *argv[])
{
   int input[10], n, a = 10;
   //*taking no of element
   cout<<"Enter the number of element in array"<<endl;
   cin>>n;  // 4
   cout<<"Enter the elements "<<endl;
   for (int i = 0; i < n; i++)
   {
       cin>>input[i]; // { 1, 2, 3, 4}
   }
   //*print old array
   cout<<"Print orignal"<<endl;
   printArr(input, n);
   alternateReverse(input, n);
    //*print reversed array
    cout<<"Print reversed"<<endl;
    printArr(input, n);
   return 0;
}