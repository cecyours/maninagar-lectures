#include<iostream>
using namespace std;
int main()
{
    int a, b ,c;
    cout<<"Enter any three number:- ";
    cin>>a>>b>>c;

    if(a>b && a>c)
    {
        cout<< a << " is max ";
    }
    else if(b>a && b>c)
    {
        cout<< b << " is max ";
    }
    else
    {
        cout<< c << " C is max ";
    }
}