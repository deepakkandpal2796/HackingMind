//? You have been given a random integer array/list(ARR) and a number X. 
//? Find and return the number of triplets in the array/list which sum to X.
 
//SAMPLE INPUT 1 -> arr[1 2 3 4 5 6 7 ] and x = 12 ,  o/p -> 5
//SAMPLE INPUT 1 -> arr[1 2 3 4 5 6 7 ] and x = 19 ,  o/p -> 0
//SAMPLE INPUT 1 -> arr[2 -5 8 -6 0 5 10 11 -3] and x = 10 ,  o/p -> 5

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int count = 0;
    int arr[] = {2, -5, 8, -6, 0, 5, 10, 11, -3};
    int x = 10;
    int size = sizeof(arr)/sizeof(arr[0]);
    for( int i = 0; i < size - 2; i++){
        for(int j = i + 1; j < size - 1; j++ ){
            for(int k = j + 1; k < size; k++ ){
                if( arr[i] + arr[j] + arr[k] == x){
                    count++;
                }
            }
        }
    }
    cout<<count<<endl;
    return 0;
}
