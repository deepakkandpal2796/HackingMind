// Provided N you have to find out the Nth Fibonacci Number.
// Sample Input 1:
// 6
// Sample Output 1:
// 8
// [ 1, 1, 2, 3, 5, 8]
// So the “6th” element is “8” hence we get the output.

//* first apne dimag se vo sum = a + b then cout << sum vala logic nikal de.....ye logic shi hai but isme thodi problem hai......if N = 1 ya 2 ho gya to series ya vo nth number print krne m thoda dimag kharab ho jata hai because loop i = 3 se chlta hai, fir uske liye alg se condition upper lagani padti hai alg se....see the code to understand mai kya bolna chata hu....

// #include<iostream>
// using namespace std;


// int main(){
//     int N;
//     cin>>N;
//     int a = 1, b = 1, c = 0;
//* ye condition alg se lagani padti hai kuch ye method isliye thoda accha nhi hai....similarly jab fabonacci print krte hai same yhi problem hoti hai....
//     if( N == 1 || N == 2){
//         cout<<a<<endl;
//     }else{
//     	for(int i = 3; i <= N; i++){
//         	c = a + b;
//             a = b;
//             b = c;
//             if(i == N){
//                cout<<c; 
//             }
//     	}
//     } 
//     return 0;
// }

//? The solution to this is ek nya method jisme ye position 1 ya 2 ke liye tumhe alg se case nhi banane padenge ek loop me hi sare case include ho jayenge....

// check this out => hum isme sum ko print nhi krwa rhe hum isme a ko print krwa rhe hai ...similarly hum isme a = 1 and b = 1 se start nhi kr rhe a = 0 and b = 1 se start kr rhe hai ...taki agr hum N = 1 ya 2 bhi dale to vo loop ke andr hi print ho or ...sum na print krwake a print krwa rhe hai isse hum sum se ek step peeche rhenge or series or jo position and vo overlap kr payega...because 1 2 bar hai starting me to vo overlap acche se ho nhi pata series or logic ka tabhi hume alg se starting ke 2 number ko treat krna padta hai but with a = 0 starting sub solve ab sare number logic se nikale ja skte hai ....

#include<iostream>
using namespace std;

int main(){
    int N;
    cin>>N;
    int a = 0, b = 1;
	for(int i = 1; i <= N; i++){
        int c = a + b;
            a = b;
            b = c;
    	}
    cout<<a;
    return 0;
}

//* to print series 

// #include<iostream>
// using namespace std;


// int main(){
//     int N;
//     cin>>N;
//     int a = 0, b = 1;
// 	for(int i = 1; i <= N; i++){
        
//         int c = a + b;
//             a = b;
//             b = c;
//             cout<<a;
//     	}
    
//     return 0;
// }