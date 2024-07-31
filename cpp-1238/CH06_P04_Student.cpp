#include <iostream>
using namespace std;

class Student
{

    int rollNo;
    string name;
    double marks;

public:
    void setRollNo(int rollNo)
    {
        this->rollNo = rollNo;
    }

    void setName(string name)
    {
        this->name = name;
    }

    void setMarks(double marks)
    {
        this->marks = marks;
    }

    int getRollNo()
    {
        return this->rollNo;
    }

    string getName()
    {
        return this->name;
    }

    double getMarks()
    {
        return this->marks;
    }
};
int main()
{
    Student s;

    string name;
    int rollNo;
    double marks;

    cout << "Enter your roll No : ";
    cin >> rollNo;

    cout << "Enter name : ";
    cin >> name;

    cout << "Enter marks : ";
    cin >> marks;

    s.setName(name);
    s.setRollNo(rollNo);
    s.setMarks(marks);

    cout << "your roll No : " << s.getRollNo() << endl;
    cout << "   your name : " << s.getName() << endl;
    cout << "  your marks : " << s.getMarks() << endl;

    return 0;
}