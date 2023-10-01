//# Most basic approach : shifting
// if d is 2 then loop run 2 times store 1st number in rotate, 
// shift the element ahead 
// and put rotate at the end of the loop
//! time limit exceeed if the array is to big
//* 1234567  rotate = 1
//* 2345671

// void rotateArray(int input[], int size, int d){
//     for(int i = 0; i < d; i++){
//         int rotate = input[0];
//         for(int j = 1; j < size; j++){
//             input[j-1] = input[j];
//         }
//         input[size-1] = rotate; 
//     }
//     for (int i = 0; i < size; i++)
//     {
//         cout<<input[i];
//     }
// }

//# 2nd approach : using the 3rd array 
// add element from n = d to n = n to the new array and then add n= 0 to n = d to the new array .


void rotateArray2(int input[], int size, int d)
{
   int arr[100] = {0} ;
   for(int i = 0; i < d; i++){
     arr[i] = input[i];
   }
   for(int j = 0; j < size-d; j++){
     input[j] = input[j+d];
   }
   int j = 0;
   for(int i = size-d; i < size; i++){
    input[i] = arr[j];
    j++;
   }
   for (int i = 0; i < size; i++)
    {
        cout<<input[i]<<" ";
    }
}