#include<iostream>
using namespace std;

template <typename T>
T maxi(T a, T b){
    return a>b?a:b;
} 

int main(){
    cout<< " Max from " << maxi <double> (2.5,5.20) <<endl;
    cout<<" Max from "<< maxi <double> (35.42,20) <<endl;
}