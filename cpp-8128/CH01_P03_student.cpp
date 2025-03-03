#include <iostream>

/**
 * object oriented
 * 
 *  */

using namespace std;

class Student
{
    int rollNo;
    string name;

public:
    void setRollNo(int r)
    {
        rollNo = r;
    }

    void setName(string n)
    {
        name = n;
    }

    int getRollNo()
    {
        return rollNo;
    }

    string getName()
    {
        return name;
    }
};

int main()
{
    Student s;

    s.setName("Aman");
    s.setRollNo(100);

    cout << "your name is : " << s.getName() << endl;
    cout << "your rollNo : " << s.getRollNo() << endl;
}