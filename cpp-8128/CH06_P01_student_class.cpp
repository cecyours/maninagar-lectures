
#include <iostream>
#include<stdio.h>
using namespace std;
class Student
{

private:
    string name;
    int roll_no;

public:

    Student() // default
    {
        name = "default";
        roll_no = 0;
    }

    Student(string name, int roll_no) // parameterized
    {
        this->name = name;
        this->roll_no = roll_no;
    }

    void setName(string name)
    {
        this->name = name;
    }


    void setRollNo(int r)
    {
        // if (r <= 0)
        // {
        //     cerr << r << " must be +ve "<<endl;
        //     return;
        // }
        roll_no = r;
    }

    string getName()
    {
        return name;
    }

    int getRollNo()
    {
        return roll_no;
    }
};

int main()
{
    int id;
    Student s("Neha",100);

    s.setName("Master Redu");
    // s.setRollNo(-3);
    cout << "Hello _" << s.getName() << "_ \t" << s.getRollNo() << endl;
}