//# call by value in varibale and call by value in arrays

#include<iostream>
using namespace std;
void printArr(int input[], int n){
    cout<<"Print"<<endl;
    for (int i = 0; i < n; i++)
   {
       cout<<input[i]<<" "; 
   }
    cout<<endl;
    
}
void increment(int input[], int n, int a){
    a++;
    input[0]++;
   cout<< "Array value in Function:  " << input[0] << endl;
   cout<< "Variable value in Function:  " << a << endl;
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
   //*print
   printArr(input, n);
   increment(input, n, a);
   cout<< "Array value in main:  " << input[0] << endl;
   cout<< "Variable value in main:  " << a << endl;

   return 0;
}

//output :

// Enter the number of element in array
// 4
// Enter the elements 
// 1 2 3
// 4
// Print
// 1 2 3 4 
// Array value in Function:  2
// Variable value in Function:  11
// Array value in main:  2
// Variable value in main:  10


// we can see that the value of the varibale is different in the main code and the function code but the array value is same in both because as we know that name of array points towards the address of the zeroth element in array and thats what it pass in the function.....

// now the function will track the value with its memory loction and the change also be done to the main memory location thats why the change in the array is for real time and in variable only the value is passed into a new variable of function's scope hence it remain differnet in both the main funciton and other function...

// if u cant undestand read notes 


