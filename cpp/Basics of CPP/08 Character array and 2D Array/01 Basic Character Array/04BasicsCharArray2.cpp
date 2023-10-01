//# Basics 2 charachter array 

//#================================= Property 1 ================================================

//* If we have char arr[4] then we should only enter 3 element we have to left the space for the null char..
//* So the when we do cout<<arr it will stop at the when the null char found..
//* If we enter 4 element in the char array then there will no null element...
//* so now if we use this cout<<arr then it will never stop and start reding other meories also..
//* and will print the garbage value until the "null char" found.

// Point 1 - If the char arr is of n then enter n-1 elemnt

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int i;
//     char arr[5];
//     cout<<"Enter the string : "<<endl;
//     cin>>arr;
//     cout<<"The string you enter : "<<arr<<endl;
//     return 0;
// }

//* output : 
// Enter the string : 
// ddddd
// The string you enter : ddddd
//# here we found out the null just after the string but thats not the cases every time.


//#================================= Property 2 ================================================


//* If we enter any word which contain sapce(" "), tab("\t"), line break("\n") then 
//* the cin function  stops taking input

// #include<iostream>
// using namespace std;
//  int main(int argc, char const *argv[])
//  {
//     char arr[100];
//     cout<<"Enter the string : "<<endl;
//     cin>>arr;  //hello world
//     cout<<"The string you enter : "<<arr<<endl; //hello
//     return 0;
//  }
 


//#================================= Property 3 ================================================

//* 

// #include<iostream>
// using namespace std;
//  int main(int argc, char const *argv[])
//  {
//     char arr[100];
//     cout<<"Enter the string : "<<endl;
//     cin>>arr;  //hello world
//     cout<<"The string you enter : "<<arr<<endl; //hello
//     return 0;
//  }

//* output : 
// Enter the string : 
// hello world
// The string you enter : hello

//! The question is that if i have to put multiple words in the string with the space how to do it ??

//#================================= Property 4 ================================================

//* We use "cin.getline() " function to scan sentences or words having space between them
//* cin.getline( str_name, length, ) ->  we have to pass 3 argument in this function.
//* 1st the name of the sring in which we have to scan.
//* 2nd is the length of the string you want to enter.
//* 3rd is (this argument is not coumpulsary)
//* cin.getline() -> it breaks at newline meaning it stops scaning when the return/enter/newline is enterd 
//# it reads space and tab but breaks at new line .

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     char input[100];
//     cout<<"Enter the string : "<<endl;
//     cin.getline(input, 100);
//     cout<<input<<endl;
//     return 0;
// }

//* output : 
// Enter the string : 
// Deepak is a good boy!
// Deepak is a good boy!

//# length is not the length of the string it is the length of the string you want to enter 
// char input[100];
// cin.getline(input, 10);
//# this means that you want to scan 9 character in the string because the strings last character is null char

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     char input[100];
//     cout<<"Enter the string : "<<endl;
//     cin.getline(input, 10);
//     cout<<input<<endl;
//     return 0;
// }

//* output : 
// Enter the string : 
// Deepak is good boy
// Deepak is


//* cin.getline( string_name, lenght , delimiter)
//* delimiter :- It is a char type element it denote the char where we have to stop scaning the string 
//* By default delimiter is "\n" that is why it breaks at the line break.


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     char input[100];
//     cout<<"Enter the string : "<<endl;
//     cin.getline(input, 100, 'e');
//     cout<<input<<endl;
//     return 0;
// }

//* output : 
// Enter the string : 
// Deepak is the great women
// D

//#================================= Questions ================================================

//* Reverse the string 

//Sample input - hello world
//sample output - dlrow olleh

// #include<iostream>
// using namespace std;

// int length (char input[]){
//     int count = 0;
//     for(int i = 0; input[i] != '\0'; i++){
//         count++;
//     }
//     return count;
// }

// void reverseString (char input[], int size){
//     int i = 0, j = size - 1;
//     while( i < j){
//         swap(input[i], input[j]);
//         i++;
//         j--;
//     }
//     cout<<"Reversed String : "<<input<<endl;
// }

// int main(int argc, char const *argv[])
// {
//     char input[100];
//     cout<<"Enter the string : "<<endl;
//     cin.getline(input, 100);
    
//     //find the lenght of the string
//     int size = length(input); 

//     // reverse the string
//     reverseString(input, size);
//     return 0;
// }

//* output : 

// Enter the string : 
// DeepakkapeeD
// Reversed String : DeepakkapeeD

// Enter the string : 
// Deepak Kandpal
// Reversed String : lapdnaK kapeeD

//#======================== PART 2 of problem ==========================

//* Sample Input 1:
// Welcome To My Home
//* Sample Output 1:
// Emoh Ym Ot Emoclew
//* Sample Input 2:
// Always Indent Your Code
//* Sample Output 2:
// Edoc Ruoy Tnedni Syawla

