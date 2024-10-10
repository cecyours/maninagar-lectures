#include<iostream>
using namespace std;
int return_exit(int n)
{
    if(n>10)
        return 1;

    else if(n<=10 && n>0)
    {
        return 0;
    }
    else
        exit(0);

}

int main()
{
    int n;
    cout<<"Enter the number : ";
    cin>>n;

    int p = return_exit(n);

    cout<<p;
}