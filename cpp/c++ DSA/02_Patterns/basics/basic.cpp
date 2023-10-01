//*===============================Print Square ==========================================

// * * * *
// * * * *
// * * * *
// * * * *

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     cout<<"Enter the number of rows \n";
//     int n;
//     cin>>n;
//     for (int i = 0; i < n; i++){
//         for (int j = 0; j < n; j++)
//         {
//             cout<<"*";
//         }
//         cout<<endl;
//     }
//     return 0;
// }

//*===============================Print Hollow Square ==========================================

// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 

//! coloumn wise thinking 
// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
//  {
//     int n;
//     cout << "Enter size: "; // taking input from user
//     cin >> n;
//     for(int i = 0; i < n; i++){
//         for(int j = 0; j < n ; j++){
//             if(i == 0 || i == n-1){  // printing stars at the first and last row 
//                 cout<<"* ";
//             }
//             else if(j == 0 || j == n-1){  // printing star at the first and last column of the in between rows 
//                 cout<<"* ";
//             }
//             else{  // printing spaces in between them 
//                 cout<<"  ";
//             }
//         }
//         cout<<endl;
//     }
//     return 0;
//  }

//! Row Wise thinking 

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"Enter the value of N :"<< endl;   //Taking Input From User
//     cin>>n;
//     for(int i = 0; i < n; i++){
//         // for 1st and last row print all stars
//         if( i == 0 || i == n-1){
//             for(int j = 0; j < n; j++){
//                 cout<<"* ";
//             }
//             cout<<endl;
//         }
//         // for other rows print * then n-2 spaces then *
//         else{
//             cout<<"* ";
//             for (int j = 0; j < n-2; j++)
//             {
//                 cout << "  ";
//             }
//             cout <<"*";
//             cout<<endl;
//         }
        
//     }
//     return 0;
// }


 //*================================Half Pyramid=========================================

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

//  #include<iostream>
//  using namespace std;
//  int main(){
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for (int i = 1; i <= rows; i++)
//     {
//        for(int j = 1; j <= i; j++){
//         cout<<"* ";
//        }
//        cout<<endl;
//     }
//     return 0;
//  }

//! Rows Wise Thinking 

//  #include<iostream>
//  using namespace std;
//  int main(){
//     int rows;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for (int i = 0 ; i < rows; i++)  // number of row
//     {
//        for(int j = 0 ; j < i+1 ; j++){ //number of star in the rows are i
//         cout<<"* ";
//        }
//        cout<<endl;
//     }
//     return 0;
//  }
 //*================================Inverted Half Pyramid=========================================

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

//  #include<iostream>
//  using namespace std;
//  int main(int argc, char const *argv[])
//  {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for(int i = rows; i >= 1 ; i--){
//         for(int j = 1 ; j <= i ; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
//     return 0;
//  }

//! Rows Wise Thinking 

//  #include<iostream>
//  using namespace std;
//  int main(int argc, char const *argv[])
//  {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for(int i = 0 ; i < rows ; i++){  
//         for(int j = 0 ; j < rows - i; j++){   // column print 0 to ( 5 - 0 )for row 1, fo row two it is (5 - 1)...this is how the column print.
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
//     return 0;
//  }


 //*================================Numeric Half Pyramid=========================================

// 1
// 12
// 123
// 1234

// #include<iostream>
//  using namespace std;
//  int main(int argc, char const *argv[])
//  {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for(int i = 0 ; i < rows ; i++){  
//         for(int j = 0 ; j < i ; j++){  
//             cout<< j+1;
//         }
//         cout<<endl;
//     }
//     return 0;
//  }

  //*================================Inverted Numerical Half Pyramid=========================================

// 54321
// 4321
// 321
// 21
// 1


#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    int rows ;
    cout<<"Enter the number of rows";
    cin>>rows;
    for (int i = 0; i < rows; i++)
    {
       for (int j = rows - i ; j > 0; j--)
       {
            cout<<j;
       }
       cout<<endl;
    }
    
    return 0;
}
