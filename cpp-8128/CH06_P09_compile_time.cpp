#include<iostream>
using namespace std;

class Task{

    public:
    
    int sum(){
        return 0;
    }

    int sum(int a,int b)
    {
        return a+b;
    }

    int sum(int a,int b, int c)
    {
        return a+b+c;
    }
};


int main()
{
    Task t;
    cout<<t.sum()<<endl; 
    cout<<t.sum(2,4,9)<<endl;
    cout<<t.sum(10,30)<<endl;
    cout<<t.sum()<<endl;
}