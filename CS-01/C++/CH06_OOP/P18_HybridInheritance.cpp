#include <iostream>
using namespace std;

// Base Class
class Person {
public:
    void getData() {
        cout << "Enter person details." << endl;
    }
};

// Derived Class 1 (from Person) -> Part of Hierarchical
class Student : public Person {
public:
    void getStudentInfo() {
        cout << "Student information collected." << endl;
    }
};

// Derived Class 2 (from Person) -> Part of Hierarchical
class Teacher : public Person {
public:
    void getTeacherInfo() {
        cout << "Teacher information collected." << endl;
    }
};

// Another Base Class
class Sports {
public:
    void getSportsMarks() {
        cout << "Sports marks recorded." << endl;
    }
};

// Derived from Student and Sports (Multiple + Multilevel)
class Result : public Student, public Sports {
public:
    void displayResult() {
        cout << "Displaying final result (Academic + Sports)." << endl;
    }
};

int main() {
    Result r;
    Teacher t;

    cout << "--- Student Result ---" << endl;
    r.getData();           // From Person
    r.getStudentInfo();    // From Student
    r.getSportsMarks();    // From Sports
    r.displayResult();     // From Result

    cout << "\n--- Teacher Info ---" << endl;
    t.getData();           // From Person
    t.getTeacherInfo();    // From Teacher

    return 0;
}
