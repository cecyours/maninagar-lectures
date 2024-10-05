#include<iostream>
using namespace std;

int main()
{
    char g;

    cout<<"Enter your grade : ";
    cin>>g;

    switch (g)
    {
    case 'A' :
    case 'a' :
        cout<<"You're in Alpha group!!";
        break;
    case 'B':
    case 'b':
        cout<<"You're in Beta group!!";
        break;
    case 'C':
    case 'c':
        cout<<"You're in Casino group!!";
        break;
    case 'D':
    case 'd':
        cout<<"You're in Deta group!!";
        break;
    default:
        cout<<"Invalid grade!!";

        break;
    }
}