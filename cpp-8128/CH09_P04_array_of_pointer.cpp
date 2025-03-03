#include<iostream>
#include<stdlib.h>
using namespace std;
int main()
{
    char *name[10];

    int n,i;

    cout<<"Enter the size : ";
    cin>>n;
  
    for(i=0;i<n;i++)
    {   
        name[i] =(char *)malloc(100 * sizeof(char));
        cout<<"Enter data : ";
        cin>>name[i];
    }

    cout<<"\n------\n";

    for(i=0;i<n;i++)
    {
        cout<<"data : "<<name[i]<<endl;
    }
}