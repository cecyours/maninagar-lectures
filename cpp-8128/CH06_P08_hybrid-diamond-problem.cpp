#include<iostream>
using namespace std;

class A{

    public:
    A()
    {
        cout<<"i am class A "<<this<<endl;
    }
};

class B : virtual public A{

    public:
    B()
    {
        cout<<"i am class B "<<this<<endl;
    }
};

class C : virtual public A{

    public:
    C()
    {
        cout<<"i am class C "<<this<<endl;
    }
};

class D : public C, public B{

    public:
    D()
    {
        cout<<"i am class D "<<this<<endl;
    }
};

int main()
{
    D d;
}