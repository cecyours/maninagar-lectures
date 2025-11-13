#include <iostream>
using namespace std;

struct Student
{
    int rollNo;
    string name;
    float marks;
};

void display(Student s)
{
    cout << "Roll No: " << s.rollNo << ", Name: " << s.name
         << ", Marks: " << s.marks << endl;
}

int main()
{
    Student s1 = {101, "Tanvi", 95.5};
    display(s1);
    return 0;
}
