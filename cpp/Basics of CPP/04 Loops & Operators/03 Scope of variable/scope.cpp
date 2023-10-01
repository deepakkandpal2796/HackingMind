// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int i = 10;
//     if(i == 10){
//         int j = 12;
//         cout<<j<<endl;  //12
//         cout<<i<<endl;  //10
//     }else{
//         cout<<j<<endl;  //not declared
//         int k = 10;     
//         cout<<k<<endl;  //10
//     }
//     cout<<j<<k<<i<<endl;   //error<<error<<10;
//     return 0;
// }

//#=========================================

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int a = 1;
//     while ( a<10)
//     {
//         int j = 1;  
//         while (j < 2)
//         {
//             int k = 1;
//             cout<<k<<endl;  //1 1
//             cout<<j<<endl;  // 1 2
//              j++;
//         }
//         cout<<j<<endl; //3
//         cout<<k<<endl;  //error out of scope
//     }
//     cout<<a<<j<<k<<endl;  // error:- only a is in the scope others are not in the scope
//     return 0;
// }


//#=========================================
// same variable in ascpoe is not allowed...

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int i = 10;
//     //* int i = 12; // this is not allowed same variable in a scope
//     i = 2;//this is allowed because it is rewriting the variable...
//     if ( i = 2){
//         int i = 12;
//         cout<<i<<endl; //this is alowed....the variable is same but the scope is different...same varibale in different scope are allowed...o/p 12
//     }
//     cout<<i<<endl;  //o/p 2
//     return 0;
// }

//#=========================================

//* initialisation scope in while loop vs for loop

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int i = 1;  //this one has the scope in the whole code as it is defined in main function scope...
//     while ( i < 10)
//     {
//         cout<<i<<endl; //print 1 -9
//         i++;
//     }
//     cout<<i<<endl;  // i = 10
//     return 0;
// }



// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     for (int i = 0; i < 10; i++)  //in for loop the initialisation variable onlt have scope inside the scope of loop....
//     {
//         cout<<i<<endl;  //print 0 - 9
//     }

//         cout<<i<<endl; ///error

//     return 0;
// }

//but if i intitalise the i = 0 outside the loop then it will act same as the while loop scope...there is no error here...

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int i = 0;
//     for ( ; i < 10; i++) 
//     {
//         cout<<i<<endl;  //print 0 - 9
//     }
//      cout<<i<<endl; // o/p:-  10
//     return 0;
// }