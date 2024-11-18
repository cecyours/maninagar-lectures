#include<iostream>
using namespace std;


int main()
{
    int a=10,b=20,c=50;

    cout<<"info a : "<<&a<<", "<<a<<endl;
    cout<<"info b : "<<&b<<", "<<b<<endl;
    cout<<"info c : "<<&c<<", "<<c<<endl;

    cout<<"---------"<<endl;

    int *p;

    p = &a;
    cout <<"info  p for a : "<<p<<", "<<*p<<endl;

    p--;
    cout <<"info  p for b : "<<p<<", "<<*p<<endl;


    p--;
    cout <<"info  p for c : "<<p<<", "<<*p<<endl;
    
}