#include <iostream>
using namespace std;

class Student
{
    int stuId;

public:
    void setStuId(int stuId)
    {
        this->stuId = stuId;
    }

    int getStuId()
    {
        return this->stuId;
    }

    void display()
    {
        cout << " my sId : " << stuId << endl;
    }
};

int main()
{
    Student s;
    s.setStuId(10);
    s.display();
    cout << " accessing the stuId " << s.getStuId() << endl;
    return 0;
}