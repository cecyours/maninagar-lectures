#include <iostream>
using namespace std;
int main()
{
    char name[10][100];
    int n,i;

    cout<<"Enter the no. of Student : ";
    cin>>n;

    cout<<"Enter those name : \n";

    for(i=0;i<n;i++)
    {
        cout<<"Enter name : ";
        cin>>name[i];
    }

    cout<<"\n-----------\n";


    for(i=0;i<n;i++)
    {
        cout<<"Student "<<i+1<<" : "<<name[i]<<endl;
    }

     return 0;
}   