#include <iostream>
using namespace std;
 
class Student {
    public:
    string name;
    int age;
    
    // Parameterized Constructor

    Student(string n, int a) {
        name = n;
        age = a;
    }
    
    // Copy Constructor
    Student(const Student &s) {
        name = s.name;
        age = s.age;
        cout << "Copy Constructor called" << endl;
    }
 
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Student s1("Tanvi", 22);
    Student s2 = s1; // Copy constructor is called
    s1.display();
    s2.display();
    return 0;
}