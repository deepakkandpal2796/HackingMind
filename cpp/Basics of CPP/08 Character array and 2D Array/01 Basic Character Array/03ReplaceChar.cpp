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

//Replace
void ReplaceChar(char input[], char c1, char c2){
    int size = length(input) - 1;
    for (int i = 0; i <= size; i++)
    {
        if(input[i] == c1){
            input[i] = c2;
        }
    }
    cout <<input<<endl;
}
//main
int main(int argc, char const *argv[])
{
    char input[10000];
    char c1, c2;
    cout<<"Enter the string : "<<endl;
    cin>>input;
    cout<<"Enter the char to replace :"<<endl;
    cin>>c1;
    cout<<"Enter the char which replace :"<<endl;
    cin>>c2;
    ReplaceChar(input, c1, c2);
    return 0;
}



// abhi tk mujhe koi tareeka nhi mila hai array return karne ka without using pointers..
// to void function se kaam ho rha hai..