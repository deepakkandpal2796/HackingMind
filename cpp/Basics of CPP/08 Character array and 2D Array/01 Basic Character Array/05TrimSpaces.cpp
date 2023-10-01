//# Given an input string S that contains multiple words, 
//# you need to remove all the spaces present in the input string.

//* Sample Input :
//  abc def g hi
//* Sample Output :
//  abcdefghi



//# Thought process
// use two pointers.
// 'i' pointer ko space pr le aao.
// 'i+1' pointer ko space se continue krke jha space nhi hai (basically jha char hai ) vha le aao.
// swap it when i =  space and j != space then swap it, and break the loop.
// at last tthis string become  ABC_DEF_GHI => ABCDEFGHI___
// now we have to add a 'null char' at the end of the string so that the string become ABCDEFGHI

//#  ======= CODE ============

// #include<iostream>
// using namespace std;

// int length (char input[]){
//     int count = 0;
//     for(int i = 0; input[i] != '\0'; i++){
//         count++;
//     }
//     return count;
// }

// void trimSpaces (char input[]){
//     //size 
//     int size = length(input);
//     //trim spaces
//     int i = 0;
//     for( ; i < size; i++){
//         if(input[i] != ' '){
//             continue;
//         }
//         // i = spaces
//         cout<<"Space is here"<<i<<endl;
//         int j = i+1;
//         for( ; j < size; j++){
//             if(input[j] == ' '){
//                 continue;
//             }
//             // j != space 
//             cout<<"swap num is here"<<j<<input[j]<<endl;
//             // swap it and do i++ j++ break the loop
//             swap(input[i], input[j]);
//             break;
//         }
//         // this is to enter the null char at the last space
//         if(j == size){
//             input[i] = '\0';
//         }
//     }
//     cout<<input<<endl;
// }

// int main(int argc, char const *argv[])
// {
//     char input[100];
//     cin.getline(input, 100);

//     //trim function
//     trimSpaces(input);
//     return 0;
// }

//# =============== optimised approach ====================
 
//Same kind of approch we used in sort 012 question where 2 pointer began at a point and then 
//one stops at the space and the other one is moving forword 
//at last we have to apply the null char

//#  ======= CODE ============

#include<iostream>
using namespace std;

void trimSpaces(char input[]) {
 int j = 0;
     for(int i = 0; input[i] != '\0'; i++){
         if(input[i] != ' '){
             input[j] = input[i];
             j++;
         }
     }
     input[j] = '\0';
     cout<<input;
}

int main(int argc, char const *argv[])
{
    char input[100];
    cout<<"Enter the string with spaces : "<<endl;
    cin.getline(input, 100);

    //trim function
    trimSpaces(input);
    return 0;
}