//! to understand how the array are stored in memory check notes yha explain krna jayda ho jaygea...

//Array in function


// #include<iostream>
// using namespace std;

// void printArr(int input[]){
//     //* first we have to find the size of an array since there is no such thing in cpp like array.length
//     //? What are we doing??
//     //* we can first find the size of the array (we can find the value of n, but we can find the total size of arr[])
//     //* sizeof(input) / sizeof(int) = 400 / 4 = 100 (i.e, the size of arr)

//     cout<<"Function : " << sizeof(input) << endl;  // o/p -> 8
    
// }


// int main(int argc, char const *argv[])
// {
//    int arr[100], n;

//    //*taking no of element
//    cout<<"Enter the number of element in array"<<endl;
//    cin>>n;    //i/p -> 3 

//    //*take input
//    for (int i = 0; i < n; i++)
//    {
//        cin>>arr[i];  // 1 2 3
//    }
   
//    //*take output
//    cout<<" Main : "<< sizeof(arr) << endl;  // o/p -> 400 ( 100 * 4)
//    printArr(arr);  // o/p -> 8
//    return 0;
// }


//output 
// Enter the number of element in array
// 3
// 1 2 3
//  Main : 400
// Function : 8


// why cout<<"Function : " << sizeof(input) << endl; is giving output 8 ???
// as printArr(arr);  passes this arr[100] in the printArr function and then we calculated the size of the passed array but its showing 8 for some reason..???
//* Let's Understand
//? as we all know that 
// int arr[100];
// cout<< arr;
// this will give us the address of the zeroth block 

//* simillarly when we are passing arr int the functin -> printArr(arr);
// this will actually pass the address of the zeroth block to the function
//? to store the address cpp use the datatype whose size is 8bytes thats why it is showing 8bytes

// -> this we understand from this experiment 
// the function not passes the array, it passes the address of the zeroth element then the function will access the value from the memory with the help of the address ....
//# there is no way to find the length of the array so we pass two integer in the function one is address and the second is lenght of the array 



//# === the correct way ===


#include<iostream>
using namespace std;

void printArr(int input[], int n){
    //* first we have to find the size of an array since there is no such thing in cpp like array.length
    //? What are we doing??
    //* we can first find the size of the array (we can find the value of n, but we can find the total size of arr[])
    //* sizeof(input) / sizeof(int) = 400 / 4 = 100 (i.e, the size of arr)

    // cout<<"Function : " << sizeof(input) << endl;  // o/p -> 8
    cout<<"Print"<<endl;
    for (int i = 0; i < n; i++)
   {
       cout<<input[i]<<" "; 
   }
    cout<<endl;
    
}


int main(int argc, char const *argv[])
{
   int arr[100], n;

   //*taking no of element
   cout<<"Enter the number of element in array"<<endl;
   cin>>n;    //i/p -> 3 


    cout<<"Enter the elements "<<endl;   //*take input
   for (int i = 0; i < n; i++)
   {
       cin>>arr[i];  // 1 2 3
   }
   
   //*take output
   //cout<<" Main : "<< sizeof(arr) << endl;  // o/p -> 400 ( 100 * 4)
   printArr(arr, n);  // o/p -> 8
   return 0;
}