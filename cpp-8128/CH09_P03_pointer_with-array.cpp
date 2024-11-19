
#include<iostream>
using namespace std;

int main()
{
    int a[10];
    int *ptr;

    cout<<"address first element  : "<<&a[0]<<endl;
    cout<<"address first element  : "<<a<<endl;

    // ptr = a; // base address
    ptr = &a[0]; // first element address

    int n,i;

    cout<<"Enter the size of array : ";
    cin>>n;

    for(i=0;i<n;i++)
    {
        cout<<"Enter data : ";
        cin>>a[i];
    }

    cout<<"\n-----------\n";

    for(i=0;i<n;i++)
    {
        cout<<" data : "<<*(ptr+i)<<endl;
    }
}