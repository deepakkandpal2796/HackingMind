//* cin.get() is used for accessing character array. It includes white space characters. Generally, cin with an extraction operator (>>) terminates when whitespace is found. However, cin.get() reads a string with the whitespace.
//it only takes char as input....one char has taken as input becuse char has 1 byte....

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int i;
//     i = cin.get();  //input 12 
//     cout<<i;    //output 49
//     return 0;
// }

//* this happens because cin.get only takes char and char has the space of only 1 byte hence in 12 it will only take 1 not as integer but as a character....(12 binary takes more than a byte to store)

//* now as it stores 1 as charachter and the variable 'i' is integer, so it will gonna type-caste the input and store it in i, as a integer and integer for i is 49 ascii value of 1 as character....


//#=========================

// lets say a question that we will count inout until we enter "$"

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[]){
//     char c;
//     cin>>c;
//     int count = 0;
//     while(c != '$'){
//         cin>>c;
//         count++;
//     }
//     cout<<count<<endl;
//     return 0;
// }

//* this will not count any "spaces \n \t" as input ..... just count the characters as input 

// if we use cin.get() then it will take all the "spaces \n \t" as input.....

#include<iostream>
using namespace std;
int main(int argc, char const *argv[]){
    char c;
    c = cin.get();
    int count = 0;
    while(c != '$'){
        c = cin.get();
        count++;
    }
    cout<<count<<endl;
    return 0;
}