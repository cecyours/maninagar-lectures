#include <iostream>
using namespace std;

class Student
{
public:
    int rollNo;
    int marks;
    char name[50];
};

int main()
{
    Student s;

    std::cout << "Enter Roll No: ";
    std::cin >> s.rollNo;

    return 0;
}


