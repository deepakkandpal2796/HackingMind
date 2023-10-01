// FInding the maximum number in array 


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int max, lengthOfArr, arr[100];
//     cout<<"Enter the no. of element in array"<<endl;
//     cin>>lengthOfArr;
//     //* input array
//     cout<<"Enter the element in array"<<endl;
//     for (int i = 0; i < lengthOfArr; i++)
//     {
//         cin>>arr[i];
//     }
//     max = arr[0];

//     //* comparing elements
//     for (int i = 0; i < lengthOfArr; i++)
//     {
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     cout<<"The maximum number is"<<endl;
//     cout<<max<<endl;
    
    
//     return 0;
// }


// TEST CASE: - if n = 0 
//* the array size is zero but we have arr[100] so if we dont enter any number then array will take garbage then in max = arr[0]; there will be a garbage value stored and at the end of the program that garbage value will be printed as the maximum value....

// this code fails if we make n = 0;

//# solution :- lets start the max with zero then it will be fine....if we add n = 0 then max will not take any garbage value this time are give output as zero....


//# ============ NEW CODE =================


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int max, lengthOfArr, arr[100];
//     cout<<"Enter the no. of element in array"<<endl;
//     cin>>lengthOfArr;
//     //* input array
//     cout<<"Enter the element in array"<<endl;
//     for (int i = 0; i < lengthOfArr; i++)
//     {
//         cin>>arr[i];
//     }
//     max = 0;

//     //* comparing elements
//     for (int i = 0; i < lengthOfArr; i++)
//     {
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     cout<<"The maximum number is"<<endl;
//     cout<<max<<endl;
    
    
//     return 0;
// }


// TESTCASE : lets enter the negative elements in array
//n = 4 , enter element -2, -4, -6, -1
// max number should be -2 but the max will be 0;
// because we initiallise the max with zero and after that we enter all the negative number hence zero will always be greater then the all the negative number 

//# solution :- lets take the max value as a super negative number 
//# e.g max = -10000000000000;

// or we can just include #include <climits>
// and then we can just use INT_MIN to initalise max


//# ============ NEW CODE =================

#include<iostream>
#include<climits>
using namespace std;
int main(int argc, char const *argv[])
{
    int max, lengthOfArr, arr[100];
    cout<<"Enter the no. of element in array"<<endl;
    cin>>lengthOfArr;

    //* input array
    cout<<"Enter the element in array"<<endl;
    for (int i = 0; i < lengthOfArr; i++)
    {
        cin>>arr[i];
    }
    max = INT_MIN;

    //* comparing elements
    for (int i = 0; i < lengthOfArr; i++)
    {
        if(max < arr[i]){
            max = arr[i];
        }
    }
    cout<<"The maximum number is"<<endl;
    cout<<max<<endl;
    
    
    return 0;
}