
#include <iostream>
using namespace std;

class A
{

public:
    A()
    {
        cout << "class A " << this << endl;
    }
};

class B : public A
{

public:
    B()
    {
        cout << "class B " << this << endl;
    }

};

class C : public A
{

public:
    C()
    {
        cout << "class C " << this << endl;
    }
};

int main()
{
    C c;
    B b;
}


/**
 * A 
 * B:A
 * C:A
 * D:B,C
  */