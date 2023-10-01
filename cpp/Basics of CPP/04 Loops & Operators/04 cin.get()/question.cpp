// Write a program to count and print the total number of characters (lowercase english alphabets only), digits (0 to 9) and white spaces (single space, tab i.e. '\t' and newline i.e. '\n') entered till '$'.
// That is, input will be a stream of characters and you need to consider all the characters which are entered till '$'.
// Print count of characters, count of digits and count of white spaces respectively (separated by space).

// Sample Input :
// abc def4 5$
// Sample Output :
// 6 2 2
// Sample Output Explanation :
// Number of characters : 6 (a, b, c, d, e, f)
// Number of digits : 2 (4, 5)
// Number of white spaces : 2 (one space after abc and one newline after 4)

#include<iostream>
using namespace std;

int main(){
	int calph= 0, cnum = 0, cspace = 0;
    char a;
    a = cin.get();
    while ( a != '$'){
        if( a >= 'a' && a <= 'z'){
            calph++;
        }
        // fact:- you can enter 0 to 9 as char and these have ascii value 48 to 57..
        else if( a >= '0' && a <= '9'){
            cnum++;
        }
        else if( a == ' '|| a == '\t' || a == '\n'){
            cspace++;
        }
        a = cin.get();
    }
    cout<<calph<<" "<<cnum<<" "<<cspace;
  return 0;
}

