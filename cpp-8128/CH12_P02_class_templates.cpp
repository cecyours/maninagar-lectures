#include<iostream>
using namespace std;

template <class T,class U>
class Task{
    T data1;
    U data2;

    public:

    Task(T t, U u)
    {
        this->data1=t;
        this->data2 = u;
    }

    void setData1(T t)
    {
        this->data1=t;
    }


    void setData2(U u)
    {
        this->data2=u;
    }

    T getData1()
    {
        return this->data1;
    }


    U getData2()
    {
        return this->data2;
    }
};

int main()
{

    Task<int, double> t(20,10.50);

    cout<<"get data : "<<t.getData1()<<endl;
    cout<<"get data : "<<t.getData2()<<endl;
}