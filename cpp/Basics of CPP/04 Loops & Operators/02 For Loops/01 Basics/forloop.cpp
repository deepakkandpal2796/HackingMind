#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    
    // print number till N
    int N;
    cin>>N;
    for( int i = 1; i <= N; i = i + 1){
        cout<<i<<endl;
    }
    //print number from m to n
    int m, n;
    cin>>m>>n;
    for( ; m <= n ; m++){
        cout<<m<<endl;
    }
    //* here we can see that we haven't provided the intialisation because it is not required .....we dont require the new valriable 'i' to make this loop run, we can do this with m and n...

    //! simillarly we can skip the 'condition' if we want,  or we can skip the 'continuation' if it required ..... you can modify the for loop as you want .....

    //check the no is prime number 
    int no;
    cin>>no;
    bool div = false;
    for (int i = 2; i < no ; i++)
    {
        if ( no % i == 0)
        {
            div = true;
        }
           
    }
    if(div){
        cout<<"Not Prime"<<endl;
    }else{
        cout<<"prime"<<endl;
    }

    //In some cases we want more than one initialisation we want more than one increment we can also do that with the help of simple comma....
    //! we can put more than one condition also by using && or || as we have studied....but to put extra initialisation or increment we use commas.....
    //* genreal representation 
    for ( int i = 0, j = 1; i < N && j > N; i++, j--)
    {
        /* code */
    }
    for ( int i = 0, j = 1; i < N || j > N; i++, j--)
    {
        /* code */
    }
    return 0;
}
