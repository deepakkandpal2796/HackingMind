#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int a = 10 ;
    cout << ++a << endl;  // a= 10 -> o/p:- 11  a = 11
    cout << a++ << endl;  //a = 11 -> o/p:- 11  a = 12
    cout << a-- << endl;  //a = 12 -> o/p:- 12  a = 11
    cout << --a << endl;  //a = 11 -> o/p:- 10  a = 10


    // shoutcut operator
    // a = a + 3;
    a += 3;  // a was 10 .... o/p:- 13 .... a = 13
    cout<<a<<endl;
    // a = a - 2;
    a -= 2; // a was 13 .... o/p:- 11 .... a = 11
    cout<<a<<endl;
    a *= 2; // a was 11 .... o/p:- 22 .... a = 22
    cout<<a<<endl;
    a /= 2; // a was 22 .... o/p:- 11 .... a = 11
    cout<<a<<endl;


    //operator percedence and associativity

    //* you dont have to remember the table just use brackets and fuck precedence and associativity table...
    // first check the precedence the one which have higher percedence operates first but if the operator have the same percedence then we check the associativity left to right or right to left it will act accordingly...

    int d = 2 * 3 + 4 ;//multiply have higher percedence hence o/p will be 6 + 4 = 10;
    cout<<d<<endl;
    int e = 4 / 2 * 3; //same percedence associativity says left to right so first division...o/p 2 * 3 = 6
    cout<<e<<endl;


    int x = 10;
    int y = 20;
    if(x++ > 10 && ++y > 20 ){
    cout << "Inside if ";
    } else{
    cout << "Inside else ";
    }
    cout<<"With and operator"<<endl;
    cout <<x<<" "<<y<<endl;

    // o/p :- Inside else 11 20 
    //* why y is 20 why not 21 ....we have used and in the if conditon so both the statement have to be true to run this if condition....but we have seen that x++ > 10 is false ...then compiler goes to && then he realises that if the condition is true then this if block will not work hence compiler skip that statement.....


    // ! In the following question the operator is or hence the compiler go on to the second statement in the if block....as we know that any one statement has to be true in the if block and 1st statement is not hence we have to go on to the next statement....

    int z = 10;
    int m = 20;
    if(z++ > 10 || ++m > 20 ){
    cout << "Inside if ";
    } else{
    cout << "Inside else ";
    }
    cout<<" With or operator 2nd statement correct"<<endl;
    cout << z << " " << m << endl;

    //? even here the first statement is true still it will go on to the next statement to check its true or not because of the or operator....
    int o = 10;
    int p = 20;
    if(o++ > 10 || ++p > 20 ){
    cout << "Inside if ";
    } else{
    cout << "Inside else ";
    }
    cout<<" With or operator 1st statement correct"<<endl;
    cout << o << " " << p << endl;

    //* Hence we can say that in || operator the it dosent matter weather the 1st statement is true or not compiler will definatelly go on to the next statement...but in && operator of the first statement is false compiler will never go on to the next statement....


    int i = 0;
    i =  i++ - --i + ++i - --i;  // 0 (i = 1) - 0 (i = 0) + 1 (i = 1) - 0 (i = 0) 
    //final output  = 1 and not i = 0 because it is the final value of i;
    cout<<i<<endl;

    return 0;
}


   

