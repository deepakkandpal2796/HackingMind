//# Given a string, determine if it is a palindrome, considering only alphanumeric characters.

//* what is palindrome?
//# A palindrome is a word, number, phrase, or other sequences of characters 
//# which read the same backwards and forwards.

// Sample Input 1 :
// abcdcba
// Sample Output 1 :
// true 
// Sample Input 2:
// coding
// Sample Output 2:
// false

#include<iostream>
using namespace std;

// length 
int length( char input[]){
    int count = 0;
    for (int i = 0; input[i] != '\0' ; i++)
    {
        count++;
    }
    return count;
}

// palindrome
bool palindrome(char input[]){
    int size = length(input) - 1;
    int i = 0;
    while ( i < size){
        if(input[i] == input[size]){
            i++;
            size--;
        }else{
            return false;
        }
    }
    return true;
}
//main
int main(int argc, char const *argv[])
{
    char pal[100];
    cout<<"Enter the string : "<<endl;
    cin>>pal;
    bool IsPal = palindrome(pal);
    cout<<"Is this a palindrome?"<<IsPal<<endl;
    return 0;
}
