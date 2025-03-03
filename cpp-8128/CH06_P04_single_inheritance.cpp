
#include<iostream>
using namespace std;

class TaskA{

    public:
    int i;
    void show(){
        i = 29;
        cout<<"Hello World "<<this;
    }
};
class TaskB : public TaskA{

    public:
    void code()
    {
        cout<<"\n Hello World "<<i<<"\t"<<this;

    }
};

int main()
{
    TaskB b;
    b.show();
    b.code();
}