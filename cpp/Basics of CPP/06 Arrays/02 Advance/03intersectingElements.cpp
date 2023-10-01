// ? You have been given two integer arrays/list(ARR1 and ARR2) of size N and M, respectively. You need to print their intersection; An intersection for this problem can be defined when both the arrays/lists contain a particular value or to put it in other words, when there is a common value that exists in both the arrays/lists.


// sample 1  arr1 - 2 6 1 2             output -> 2 1 2
//            arr2 - 1 2 3 4 2


//1st method -> with the help of 3rd array;

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
     // input info
//     int arr2[] = {2, 6, 8, 5, 4, 3};
//     int arr1[] = {2, 3, 4, 7};
//     int size1 = sizeof(arr1)/sizeof(arr1[0]);
//     int size2 = sizeof(arr2)/sizeof(arr2[0]);

     // Third array
//     int arr3[20] = {0};

     // Loops to accesse element 
//     for(int i = 0; i < size1; i++){
//         for(int j = 0; j < size2; j++){
//             if(arr1[i] == arr2[j] && arr2[j] != arr3[j]){
//                 cout<<arr1[i]<<'\t';
//                 arr3[j] = arr2[j];
//                 break;
//             }
//         }
//     }
//     return 0;
// }

//2nd method -> change the 2nd array 

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    // input info
    int arr2[] = {2, 6, 8, 5, 4, 3};
    int arr1[] = {2, 3, 4, 7};
    int size1 = sizeof(arr1)/sizeof(arr1[0]);
    int size2 = sizeof(arr2)/sizeof(arr2[0]);

    // Loops to accesse element 
    for(int i = 0; i < size1; i++){
        for(int j = 0; j < size2; j++){
            if(arr1[i] == arr2[j]){
                cout<<arr1[i]<<'\t';
                arr2[j] = -1000000; //int_min
                break;
            }
        }
    }
    return 0;
}
