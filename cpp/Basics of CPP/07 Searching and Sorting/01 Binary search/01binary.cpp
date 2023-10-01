#include<iostream>
using namespace std;

int main(int argc, char const *argv[])
{
    int input[] = {1, 3, 7, 9, 11, 12, 45};
    int n = sizeof(input)/sizeof(input[0]);
    int val = 9;
    int start = 0, end = n - 1;
    while (start <= end){
        int mid = (start + end)/2;
        if(val == input[mid]){
            cout<<mid<<endl;
        }
        else if(val > input[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    cout<<"Not in the array"<<endl;
    return 0;
}
