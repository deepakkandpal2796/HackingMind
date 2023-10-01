//# Find the unique element in the array

//? You have been given an integer array/list(ARR) of size N. Where N is equal to [2M + 1]. Now, in the given array/list, 'M' numbers are present twice and one number is present only once.You need to find and return that number which is unique in the array/list.

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int arr[] = {2,3,1,1,10,11, 10,6,3,6,2};
//     for(int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++){
//         int check = arr[i];
//         int j = 0;
//         for (; j < sizeof(arr)/sizeof(arr[0]); j++)
//         {
//             if(i == j){
//                 continue; //same number check nhi krna to ext iteration j ka 
//             }
//             else if( check == arr[j]){ // when duplicate of check are found then next check so break
//                 break;
//             } 
//         }
//         if( j == sizeof(arr)/sizeof(arr[0])){ // this condition alway check first why? agar kabhi arr length hi 1 hui to vo element hi unique hoga so i =j upper hoga to kuch print nhi hoga
//                 cout<<check<<endl;
//             }
        
//     }
//     return 0;
// }

//=========================================================

//# We can skip the continuw statement....just by doing this

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int arr[] = {2,3,1,1,10,11, 10,6,3,6,2};
//     for(int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++){
//         int check = arr[i];
//         int j = 0;
//         for (; j < sizeof(arr)/sizeof(arr[0]); j++)
//         {
//             if(i != j){       
//                 if( check == arr[j]){ // when duplicate of check are found then next check so break
//                     break;
//                 } 
//         }
//         if( j == sizeof(arr)/sizeof(arr[0])){ // this condition alway check first why? agar kabhi arr length hi 1 hui to vo element hi unique hoga so i =j upper hoga to kuch print nhi hoga
//                 cout<<check<<endl;
//             }
        
//     }
//     return 0;
// }

//=========================================================

//# best method is to use XOR 
//* as we know XOR of same number is zero... all the other numbers get cancelled and the remainng one is the unique.

#include<iostream>
// #include<vector>
using namespace std;
int main(int argc, char const *argv[])
{
    int arr[] = {2,3,1,1,10,21,10,6,3,6,2};
    int unique = 0;
    for ( int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++ )
    {
        unique = arr[i] ^ unique;
    }
    cout << unique << endl;
    return 0;
}
