#include <iostream>
using namespace std;

class Task
{

public:
    void display()
    {
        cout << "I am code !! " << this << endl;
    }
};

int main()
{

    Task t1,t2;

    t1.display();
    t2.display();
    return 0;
}