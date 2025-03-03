#include<iostream>
using namespace std;

class Todo{

    public:
    void task()
    {
        cout<<"I am Doing random task !!"<<endl;
    }

    void task(string name)
    {
        cout<<"i am doing "<<name<<" task !!"<<endl;
    }
};

class Operation{


    public:

    int sum()
    {
        return 0;
    }

    int sum(int a,int b)
    {
        return a+b;
    }

    int sum(int a,int b,int c){
        return a+b+c;
    }
};
int main()
{
    Todo me;

    me.task();// 
    me.task("Reading"); 


    Operation p;

    cout<<p.sum()<<endl;
    cout<<p.sum(3,2,5)<<endl;
    cout<<p.sum(4,2)<<endl;
}