#include <iostream>
using namespace std;

class Student
{
    int rollNo;
    string name;

public:
    void setRollNo(int r)
    {
        if (r < 0)
        {
            cerr << "roll no must be greater than 0;" << endl;
        }
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
    s.setRollNo(2);
    s.setName("Debl");
    cerr << "I am error" << endl;
    clog << "I am log" << endl;
}