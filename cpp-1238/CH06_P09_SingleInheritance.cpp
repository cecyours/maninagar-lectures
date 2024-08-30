
#include <iostream>
using namespace std;

class A
{

public:
    A()
    {
        cout << "I am in A " << this << endl;
    }
};

class B : public A
{

public:
    B()
    {
        cout << "I am in B " << this << endl;
    }
};

int main()
{
    B b;
    return 0;
}