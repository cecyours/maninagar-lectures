#include<iostream>
using namespace std;

class A{

    public:

    void sum(int a,int b)
    {
        cout<<"In a "<<(a+b)<<endl;
    }
};

class B : public A{
    public:
    void sum(int a,int b)
    {
        cout<<"In b "<<a+b<<endl;
    }
};
int main()
{
    B b;
    b.sum(2,4);
    b.A::sum(2,4); // scope resolution operator
}