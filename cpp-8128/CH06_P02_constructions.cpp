#include <iostream>
using namespace std;

class Student{

    private:

    string name;
    int rollno;

    public:
    Student() // default constructor
    {
        name = "Default";
        rollno = 0;

        cout<<"default constructor "<<endl;
    }

    Student(string name, int rollno)
    {
        this->name = name;
        this->rollno = rollno;
    }

    Student(Student &s)
    {
        this->name = s.name;
        this->rollno = s.rollno;
    }

    void setName(string name)
    {
        this->name = name;
    }

    void setRollNo(int rollno)
    {
        this->rollno = rollno;
    }

    string getName()
    {
        return name;
    }

    int getRollNo()
    {
        return rollno;
    }

};


int main()
{
    Student s1("denver",3);
    Student s2;
    Student s3(s1);

    cout<<"Student 1 "<<s1.getName()<<"\t"<<s1.getRollNo()<<endl;
    cout<<"Student 2 "<<s2.getName()<<"\t"<<s2.getRollNo()<<endl;
    cout<<"Student 3 "<<s3.getName()<<"\t"<<s3.getRollNo()<<endl;
}