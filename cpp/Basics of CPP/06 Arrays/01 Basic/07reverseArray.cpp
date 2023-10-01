//# reverse the array without using the new array

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

void reverse(int input[], int n){
    int i = 0, j = n-1;
    while (i < j){
        int temp = input[j];
        input[j] = input[i];
        input[i] = temp;
        i++;
        j--;
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
   reverse(input, n);
    //*print reversed array
    cout<<"Print reversed"<<endl;
    printArr(input, n);
   return 0;
}