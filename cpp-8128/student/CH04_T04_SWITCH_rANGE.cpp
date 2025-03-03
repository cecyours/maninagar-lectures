#include<iostream>
using namespace std;
int main()
{
    int a;

    cout<<"Enter the rollno : ";
    cin>>a;

    switch (a)
    {
    case 1 ... 10:
        cout<<"First grp!!";
        break;
    
    case 11 ... 20:
        cout<<"Second grp!!";
        break;

    case 21 ... 30:
        cout<<"Third grp!!";
        break;
    default:
        cout<<"Invalid roll no!!";
        break;
    }
}