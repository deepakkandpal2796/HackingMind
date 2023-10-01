// #include<iostream>
// using namespace std;
// int main()
// {
// 	int arr[] = {1,1,0,1};
// 	int count_new = 0, count_pre = 0;
//         for(int i = 0; i < sizeof(arr)/sizeof(arr[0]) ; i++){
// 			cout<<"current element"<<arr[i]<<endl;
//             if( arr[i] == 1){
//                 count_new++;
// 				cout<<"The iteration and the count "<<count_pre<<count_new<<"\t"<<i<<endl;
//             }else{
// 				if(count_new > count_pre){
// 					count_pre = count_new;
// 				}
//                 count_new = 0;
// 				cout<<"The iteration and the count "<<count_pre<<count_new<<"\t"<<i<<endl;
//             }
//         }
// 		if( count_pre > count_new){
// 			cout<<"pre"<<count_pre<<endl;
// 		}else{
// 			cout<<"new"<<count_new<<endl;
// 		}
// 	return 0;
// }
// int main(int argc, char const *argv[])
// {
// 	int arr[12];
// 	for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++)
// 	{
// 		cout<<i<<endl;
// 	}
	
// 	return 0;
// }

// 1,0,1,1,0,1,1,1,0,1

#include<iostream>
using namespace std;
int main(int argc, char const *argv[])
{
	float num = 1, den = 2;
	cout<< num/den<<endl;
	return 0;
}
