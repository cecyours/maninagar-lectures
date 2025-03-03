#include<iostream>
using namespace std;
int main()
{
    int a[100],i,n,x,y;

    cout<<"Enter the size of array : ";
    cin>>n;

    cout<<"Enter the array : "<<endl;

    for ( i = 0; i < n; i++)
    {
        cout<<"Enter the value of a{ "<<i<<" } : ";
        cin>>a[i];
    }

    cout<<"----------------------------------------------";
    for ( i = 0; i < n; i++)
    {
        cout<<"Value of a{ "<<i<<" } : "<<a[i]<<" , "<<a[i] * a[i]<<endl;
    }

    x=a[0];
    y=a[0];
    for ( i = 0; i < n; i++)
    {
        if(x>a[i])
        {
            x=a[i];
        }

        if(y<a[i])
        {
            y=a[i];
        }
    }

    cout<<"Maximum number : "<<y<<endl;
    cout<<"Minimum number : "<<x<<endl;
    
    
}