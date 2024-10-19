
#include <iostream>
using namespace std;

class A
{

public:
    A()
    {
        cout << "class A " << this << endl;
    }

    void show()
    {
        cout << "i am A in show " << this << endl;
    }
};

class B
{

public:
    B()
    {
        cout << "class B " << this << endl;
    }

    void show()
    {
        cout << "i am B in show " << this << endl;
    }
};

class C : public A, public B
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

    // c.show() 
    c.A::show();
    c.B::show();
}


/**
 * A 
 * B:A
 * C:A
 * 
  */