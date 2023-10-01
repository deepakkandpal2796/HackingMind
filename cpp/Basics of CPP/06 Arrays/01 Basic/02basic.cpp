// How to take array input from the user..
// first we have to declare array with its datatype and size eg. int b[10]..



//#take array length input from the user 

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {

   // int num = 0;
   // cin>>num;
   // int input[n];
    //! we will never creat an array of a variable size, we will always create an array of constant size
//    int input[100]; // this is fine
//    int base[20]; // this is fine
//    int height[50]; // this is fine
    // this is not fine we dont do this kind of thing in the name of constant 
//    int x = 100;
//    int ex[x];
    //* this simply means that we cant declare an array of variable size....the length of the array is constant....we know if we make 100 length of aaray and then enter only 10 number we are waisting the space but until we study the dynamic array we will not do this....In the rest 90 element space the compiler will take the garbage value...if you print the whole array to 100 insted of 10 then you will find garbage value from 11 to 100 place...

//    return 0;
// }

//#take array input from the user, then printing the whole array...

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
   int arr[100], lengthOfArr;
   cout<<"Enter the no. of element you want to enter in array"<<endl;
   cin>>lengthOfArr;
   // input in array
   for (int i = 0; i < lengthOfArr; i++)
   {
      cin>>arr[i];
   }
   //output in array
   for (int i = 0; i < lengthOfArr; i++)
   {
      cout<<arr[i]<<endl;
   }
   return 0;
}

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//    int arr[10] = {1, 2, 3, 4 , 5, 6, 7, 8, 9, 10};
//    cout<<arr;
//    return 0;
// }

