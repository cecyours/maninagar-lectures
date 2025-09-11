#include <iostream>
using namespace std;

class Student{
   public:
    char name[100];
    int rollNo;
    int marks;
};


int main()
{
    Student s;

    cout << "Enter name :" << endl;
    cin >> s.name;

    cout << "Enter roll :" << endl;
    cin >> s.rollNo;

    cout << "Enter marks :" << endl;
    cin >> s.marks;
    
    cout << s.name << " " << s.rollNo << " " << s.marks << endl;

    return 0;
}