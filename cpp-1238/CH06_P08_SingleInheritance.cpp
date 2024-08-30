#include <iostream>
using namespace std;

class A
{

    public:
        void greet()
        {
            cout << "There is no other like me!! " << this << endl;
        }
};

class B : public A
{

    public:
        B()
        {
            cout << "My self ! " << this << endl;
        }
        void greet()
        {
            cout<<"in B "<<this<<endl;
        }
};
int main()
{
    B object;
    A a;
    object.greet();
    a.greet();

    return 0;
}