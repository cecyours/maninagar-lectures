#include<iostream>
using namespace std;
int main()
{
    char c;

    cout<<"Enter the character : ";
    cin>>c;

    if(c>='a' && c<='z')
    {
        cout<<"Lowercase number...";
    }
    else if(c>='A' && c<='Z')
    {
        cout<<"Uppercase number...";
    }
    else
    {
        cout<<"Invalid character";
    }
}