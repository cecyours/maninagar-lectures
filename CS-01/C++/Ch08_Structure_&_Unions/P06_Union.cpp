#include <iostream>
#include <cstring> 

using namespace std;

union Data {
    int rollno;
    float marks;
    char name[50];
};

int main() {
    Data d;

    d.rollno = 10;
    cout << "Roll Number: " << d.rollno << endl;

    d.marks = 90.0f;
    cout << "Marks: " << d.marks << endl;

    strcpy(d.name, "Harshpreet");
    cout << "Name: " << d.name << endl;

    cout << "After string assignment: rollno = " << d.rollno 
         << ", marks = " << d.marks << endl;

    return 0;
}
