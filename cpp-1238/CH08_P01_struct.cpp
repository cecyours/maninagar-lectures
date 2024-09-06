#include <iostream>
using namespace std;

struct Student
{
    int id;
    string name;
};

int main()
{
    struct Student s;

    cout << "Enter student id : ";
    cin >> s.id;

    cout << "Enter student name : ";
    cin >> s.name;


    cout<<"your name : "<<s.name<<", id : "<<s.id<<endl;
    return 0;
}