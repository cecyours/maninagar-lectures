#include<iostream>
using namespace std;
int main()
{
    int a,b,c;

    cout<<"Enter two number : ";
    cin>>a>>b;

    c=a>b?a:b;
    cout<<"Maximum number is : "<<c;
}