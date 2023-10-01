//Write a program to calculate the total salary of a person. The user has to enter the basic salary (an integer) and the grade (an uppercase character), and depending upon which the total salary is calculated as -
// totalSalary = basic + hra + da + allow – pf
// hra   = 20% of basic
// da    = 50% of basic
// allow = 1700 if grade = ‘A’
// allow = 1500 if grade = ‘B’
// allow = 1300 if grade = ‘C' or any other character
// pf    = 11% of basic

// Round off the total salary and then print the integral part only.
// Note: Try finding out a function on the internet to do so

#include<iostream>
#include<math.h> //to use the round function we have to use this library
using namespace std;

int main() {
	int basic, allow = 0;
    char grade;
    cout<<"Enter the Basic pay and the Grade"<<endl;
    cin>>basic>>grade;
    double hra = 0.2 * basic;
    
    double da = 0.5 * basic;
    
    double pf = 0.11 * basic; 
    
    
    if( grade == 'A'){
        allow = 1700;
    }
    else if (grade == 'B'){
        allow = 1500;
    }
    else{
        allow = 1300;
    }
    
    double totalSalary = basic + hra + da + allow - pf;
    int ans = round(totalSalary);
    
    cout<<ans<<endl;
    
    return 0;
}


//if i do the following .... all the test cases are write but last test case out of 6 is wrong double...
// totalSalary = basic + hra + da + allow - pf; 
//cout<< round(totalSalary); 

//but if i do the following... 
//double totalSalary = basic + hra + da + allow - pf; 
//int ans = round(totalSalary); 
//cout << ans; 
//then all the test cases are working fine....whats the difference???....because round only give the integral part (for eg double a = 18.000 b = 24.65; cout<<a<<b; o/p is 18 25)..so why we need to convert this into integer first..why this all happening ?? how could i know the values of the test cases?

//* 1234567897 'A' --> Run this test case  o/p:- 1.96296e+09...

//! The answer of "big" numbers are in the from of exponetial because the float or double stores the number in the form of exponents so, when they round of any big number they'll round of the number and give the result in the exponential form... but we want a integer to distribute the salary hence we have to do the type conversion....thats why, we are printing this as an integer beacuse that will give us a number not a number written in exponent... 
