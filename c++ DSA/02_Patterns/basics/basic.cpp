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


// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for (int i = 0; i < rows; i++)
//     {
//        for (int j = rows - i ; j > 0; j--)
//        {
//             cout<<j;
//        }
//        cout<<endl;
//     }
    
//     return 0;
// }

  //*================================Full Pyramid=========================================
//           *   
//         *   *   
//       *   *   *   
//     *   *   *   *   
//   *   *   *   *   *   
// *   *   *   *   *   *   

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for (int i = 0; i < rows; i++)
//     {
       //spaces
//       for (int j = rows-1; j > i ; j--)
//       {
//          cout<<"  ";
//       }
      //stars and space 
//       for (int k = 0; k < i+1; k++)
//       {
//         cout<<"* ";
//         cout<<"  ";
//       }
//       cout<<endl;
//     }
    
//     return 0;
// }

//*================================Inverted Full Pyramid=========================================

// *   *   *   *   *   
//   *   *   *   *   
//     *   *   *   
//       *   *   
//         *   

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for (int i = 0; i < rows; i++)
//     {
//       //spaces
//       for (int j = 0; j < i; j++)
//       {
//         cout<<"  ";
//       }
//       //star
//       for (int k = i; k < rows; k++)
//       {
//         cout<<"* ";
//         cout<<"  ";
//       }
//       cout<<endl;
//     }
    
//     return 0;
// }

//*================================Numeric Pyramid=========================================

//         1 
//       2 3 2 
//     3 4 5 4 3 
//   4 5 6 7 6 5 4 
// 5 6 7 8 9 8 7 6 5 

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     int counter;
//     for (int i = 0; i < rows; i++)
//     {
//       for (int j = 0; j < rows-1-i; j++)
//       {
//         cout<<"  ";
//       }
//       counter = i + 1;
//       for (int k = 0; k < i+1; k++)
//       {
//         cout<<counter<<" ";
//         counter++;
//       }
//       counter = counter - 2;
//       for (int l = 0; l < i; l++)
//       {
//         cout<<counter<<" ";
//         counter--;
//       }
//       cout<<endl;
//     }
    
//     return 0;
// }


//*================================Numeric Hollow Pyramid=========================================

//     1
//    1 2
//   1   3
//  1     4
// 1 2 3 4 5 

//! 1st if rows = last then print all element.
//! else just print row-1 spaces first then.
//! divide the piramid into half and then the other half. 
//! just print the first place and then space and then the last place.
//! print the spaces in between row - 1 spaces.

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//     int rows ;
//     cout<<"Enter the number of rows";
//     cin>>rows;
//     for (int i = 1; i <= rows; i++)
//     {
//       if( i != rows){  //*1st if rows != last then print first place and the last place.
//         for (int j = 1; j <= rows-i; j++) //*print row-1 spaces first
//           {
//             cout<<" ";
//           }
//         for (int k = 1; k <= i ; k++)   //*first print the half piramid 
//           {
//             if(k == 1){  //*print only first element
//               cout<<k;
//             }else{   //* print spaces 
//               cout<<" ";
//             }
//           }
//         for (int l = 1; l < i; l++) //* other half of the piramid
//         {
//           if(l == i-1){ //*print the last element 
//             cout<<i;
//           }else{  //*else print the spaces 
//             cout<<" ";
//           }
//         }
//       }
//       else{ //*1st if rows = last then print all element.
//         for (int j = 1; j <= rows; j++)
//             {
//               cout<<j<<" ";
//             }
//       }
//       cout<<endl;

//     }
    
//     return 0;
// }


//*================================Hollow Inverted Right Triangle=========================================

// * * * * * 
// *     * 
// *   * 
// * * 
// * 

//! first row puri print hogi
//! first coloumn puri print hogi j==0 -> *
//! else print spaces 

// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
//  {
//   int rows;
//   cout<<"Enter the number of rows "<<endl;
//   cin>>rows;
//   for (int i = 0; i < rows; i++)
//   {
//     for (int j = 0; j < rows-i; j++)
//     {
//       if(i==0){   //* first row puri print hogi
//         cout<<"* ";   
//       }else if(j == 0 || j == rows-i-1){  //* first coloumn puri print hogi j==0 -> *
//         cout<<"* ";
//       }else{
//         cout<<"  "; //* print spaces 
//       }
//     }
//     cout<<endl;
//   }
  
//   return 0;
//  }
//*  if(i==0 || j == 0 || j == rows-i-1) // you can also do this ...

//*================================Hollow Full Pyramid=========================================

//         * 
//       *   * 
//     *       * 
//   *           * 
// * * * * * * * * * 

//! stategy is divide the pyramid into two halfs 
//! First print the spaces 
//! Remeber the last line is all stars 
//! Print the first half of the triangle where j == 0
//! Print the second half of the triangle where k == i-1;
//! add an or condition to print all star of i == rows-1; (last row);

//Basic Approach 
// #include<iostream>
// using namespace std;
// int main(int argc, char const *argv[])
// {
//   int rows;
//   cout<<"Enter the number of rows"<<endl;
//   cin>>rows;
//   for (int i = 0; i < rows; i++)
//   {

//     //* Printing spaces 
//     for (int s = 0; s < rows-1-i; s++)
//     {
//       cout<<"  ";
//     }
//     //* the first half of pyramid 
//     for (int j = 0; j < i+1; j++)
//     {
//       if (j == 0 || i == rows-1)
//       {
//         cout<<"* ";
//       }else{
//         cout<<"  ";
//       }

//     }
//     //* The second half of the pyramid 
//     for (int k = 0; k < i; k++)
//     {
//       if( k == i-1 || i == rows-1){
//           cout<<"* ";
//       }else{
//         cout<<"  ";
//       }
      
//     }
//     cout<<endl;
//   }
  
//   return 0;
// }


// Hard Approach (which interviwer is looking for)
//           *   
//         *   *   
//       *   *   *   
//     *   *   *   *   
//   *   *   *   *   *   
//!Approach - 

//  _ _ _ _ * _ _ _ _ 
//  _ _ _ *   * _ _ _ 
//  _ _ *       * _ _ 
//  _ *           * _ 
//  * * * * * * * * * 

//!Approach - 


//! Pascal’s Triangle
//!Right Half Diamond Pattern
//!Full Diamond Pattern