#include <iostream>
using namespace std;

class Task
{
    int num;

public:
    Task()
    {
        num = 29; 
    }

    Task(int num)
    {
        this->num = num;
    }

    int getNum()
    {
        return num;
    }
};

int main()
{

    Task t1,t2(30);

    cout << "i want num " << t1.getNum() << endl;
    cout << "i want num " << t2.getNum() << endl;
    return 0;
}