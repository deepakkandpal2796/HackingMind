// print :- 
// ABCD
// ABCD
// ABCD
// ABCD

//! remember :- if you are doing directly cout<<ch; ch = ch + 1 -> the compiler will print the ascii values we have to first store this in a char variable and print that char variable to get desired result...


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    int i = 1;
    while ( i <= N)
    {
        int j = 1;
        char ch = 'A';
        while ( j <= N)
        {
            char newch = ch + j - 1;
            cout<<newch;
            j++;
        }
        cout<<endl;
        i++;
    }
   
    return 0;
}

//* ERROR METHOD 

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int N;
//     cin>>N;
//     int i = 1;
//     while ( i <= N)
//     {
//         int j = 1;
//         char ch = 'A';
//         while ( j <= N)
//         {
//             cout<<ch;
//             ch = ch + 1;
//             j++;
//         }
//         cout<<endl;
//         i++;
//     }
   
//     return 0;
// }


