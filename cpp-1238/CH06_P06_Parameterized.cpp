#include <iostream>
using namespace std;

class Student
{
    int rollNo;
    string name;
    double fee;

public:
    Student() // default constuctor
    {
        rollNo = 0;
        name = "N/A";
        fee = 0;
    }

    Student(int rollNo, string name, double fee) //  Parameterized
    {
        this->rollNo = rollNo;
        this->name = name;
        this->fee = fee;
    }

    void getStudent()
    {
        cout << "Roll No : " << rollNo << endl;
        cout << "   Name : " << name << endl;
        cout << "    Fee : " << fee << endl;
    }

    string getName()
    {
        return this->name;
    }
    double getFee()
    {
        return this->fee;
    }
};
int main()
{

    Student s1, s2(20, "Gk", 3999),s3(30,"Neha",3000);

    s1.getStudent();
    cout << "--------------" << endl;
    s2.getStudent();
    cout << "--------------" << endl;
    s3.getStudent();
    cout << " getting fee of " << s2.getName() << " , is " << s2.getFee();
    return 0;
}