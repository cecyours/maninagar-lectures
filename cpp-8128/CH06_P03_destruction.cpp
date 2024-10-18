#include <iostream>
using namespace std;

class Task
{

public:
    int id;

    Task()
    {
        id = 0;
    }
    Task(int i)
    {
        this->id = i;
        cout << "current task id : " << id << endl;
    }

    ~Task()
    {

        // db_clean(id);
        cout << " i am done " << id << endl;
    }
};

int main()
{
    Task t1(39), t2(19), t3(90);

    int k;
    cout<<"Enter a number : ";
    cin>>k;

    Task t4(40);

}
