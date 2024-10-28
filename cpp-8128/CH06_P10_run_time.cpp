#include<iostream>
using namespace std;

class MainTask{

    public:

    void show()
    {
        cout<<"Hello Denver !!"<<endl;
    }
};

class SubTask : public MainTask{

    public:

    void show()
    {
        cout<<"Hello Jorge Carter !!"<<endl;
    }
};


int main()
{ 
    SubTask s;
    s.show();
    s.MainTask::show();
}