
#include<iostream>
using namespace std;
int main()
{
    int a=10;
    int *p = &a;
    int **pp = &p;
    

    cout<<"address of a : "<<&a<<"\t "<<a<<endl;
    cout<<"address of p : "<<&p<<"\t "<<p<<endl;
    cout<<"address of p : "<<&pp<<"\t "<<pp<<endl;


    cout<<"\n--------------\n";
    cout<<"value using pp : "<<**pp<<endl;
}