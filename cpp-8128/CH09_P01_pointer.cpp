
#include <iostream>
using namespace std;

int main()
{
    int a=10;
    int *p;

    p = &a;
    cout<<"address of a without pointer : "<<&a<<", "<<a<<endl;
    cout<<"   address of a with pointer : "<<p<<", "<<*p<<endl;
}