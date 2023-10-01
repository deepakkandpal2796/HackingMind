//# =================================== How to declare strings
//# =================================== How to enter a string and print a string 
//# =================================== null character in string 

// #include <iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     char name[10] = "Deepak";
//     // cout<<"Enter the First name "<< endl;
//     // cin>>name;  // you can use this simple way to enter a string not for loop
//     cout<<"name[0] = "<<name[0]<<endl;
//     cout<<"name[1] = "<<name[1]<<endl;
//     cout<<"name[2] = "<<name[2]<<endl;
//     cout<<"name[3] = "<<name[3]<<endl;
//     cout<<"name[4] = "<<name[4]<<endl;
//     cout<<"name[5] = "<<name[5]<<endl;
//     cout<<"name[6] = "<<name[6]<<endl; // null character 
//     name[7] = 'X'; // this will not print if we "cout<<name" because of the null character in between
//     cout<<"name[7] = "<<name[7]<<endl;
//     cout<<"name = "<<name<<endl;
//     return 0;
// }

//* Output :- 

// Enter the First name 
// DEEPAK
// name[0] = D
// name[1] = E
// name[2] = E
// name[3] = P
// name[4] = A
// name[5] = K
// name[6] = 
// name = DEEPAK


//# ================================= Replace null with character

// #include <iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     char name[10];
//     cout<<"Enter the First name "<< endl;
//     cin>>name;  // Enter the name ABC and put 3 index as D (3 index is null index because name us ABC)
//     name[4] = 'X';
//     name[3] = 'd';
//     cout<<"name = "<<name<<endl;
//     return 0;
// }

//* Output :- 

// name = ABCdX�����f

//# what has happend actually ? we enterd the string as ABC so automatically the null character goes
//# to the name[3] and we put name[4] = 'X'; name[3] = 'd'; 
//# now what happen is we have string ABCdX and garbage value in the whole array if there is a null character
//# the the remainin array so the loop ends there otherwise it will print garbage till the end of array.
//! as you can see here there is no null char in the ramining array so compiler printed all the 6 remaining 
//! garbage value. but sometimes it will print only 7 char bcz at 8 there is a null char...


//# ================================= Add a null character

// #include <iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     char name[10];
//     cout<<"Enter the First name "<< endl;
//     cin>>name;  // Enter the name ABCD and put 3 index as D (3 index is null index because name us ABC)
//     name[2] = '\0';
//     cout<<"name = "<<name<<endl;
//     return 0;
// }

//* Output :- 
// Enter the First name 
// ABCD  
// name = AB

//simple explaination null beech me aa gya to last value print nhi kr payega


//# ================================= Return the length of the string

#include <iostream>
using namespace std;


int length (char input[]){
    int count = 0;
    for (int i = 0; input[i] != '\0' ; i++)
    {
        count++;
    }
    return count;
    
}
int main(int argc, char const *argv[])
{
    char firstName[10];
    cout<<"Enter the string "<<endl;
    cin>>firstName;
    cout<<"Lenght : "<<length(firstName)<<endl;
    return 0;
}