//# ==== Arrays ====

// Arryas are basically the list of simillar type of elements..


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    //how to declare the array
    //* how to declare a normal variable....
    //* dataType Name;
    //? how to declare an array....
    //? dataType name [lenghtOfArrya]

    //memory taken
    int d [5];
    //* now int is of four byte and d[5] can store 5 variable so memory will be 5 * 4 = 20 bytes...

    //index 
    //*here we can store so many values, hence to differenciate we give them indexes
    //* e.g d[1] = have index 0, d[2] = have index 1....d[5] = have index 4...
    //* size of array is n.....indexing will be 0 to n-1;
    //! why indexing starts from zero??? --> we will study this ahead..

    //how to give value to array...
    //* in case of normal varibale we do int a; a = 5;
    //? in array you have to use the index to place the value in the particular container..
    //? eg. int b[5]; b[0] = 1, b[4] = 3
    //? b[5] = 21; --> this statement is wrong array size is 5 so valid indexes are 0-4.

    //same for print we have to use index
    //* cout<<b[0]<<b[4]
    //* if we print a empty index in an array then it will give us a garbage value...


    //different arrays
    //* simillarly we can make a double array a char array ans so on just changing the variable....

    return 0;
}
