// Write a program that takes a character as input and prints either 1, 0 or -1 according to the following rules.
// 1, if the character is an uppercase alphabet (A - Z)
// 0, if the character is a lowercase alphabet (a - z)
// -1, if the character is not an alphabet


// # ==== 1st method ====
//? we can do this normally compare char with char small and upper case alphabets....

#include<iostream>
using namespace std;

int main() {
	char c;
    cin>>c;
    //for upper case alphabets 
    if(c >= 'A' && c <= 'Z'){
        cout<<1<<endl;
    }
    //for lower case alphabet
    else if(c >= 'a' && c <= 'z'){
        cout<<0<<endl;
    }
    // for not an alphabet
    else{
        cout<<-1<<endl;
    }
	return 0;
}

//# ==== 2nd method ====
//? We can also compare ascii value to the char.... (if you know the ascii value of given)

// #include<iostream>
// using namespace std;

// int main() {
// 	   char c;
//     cin>>c;
//     for upper case alphabets 
//     if(c >= 65 && c <= 90){
//         cout<<1<<endl;
//     }
//     for lower case alphabet
//     else if(c >= 97 && c <= 122){
//         cout<<0<<endl;
//     }
//     for not an alphabet
//     else{
//         cout<<-1<<endl;
//     }
// 	return 0;
// }
