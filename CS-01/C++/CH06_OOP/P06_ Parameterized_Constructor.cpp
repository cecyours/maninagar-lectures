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
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
 };
 
 int main() {
    Student s1("Tanvi", 22); // Parameterized constructor called
    Student s2("Aryan", 20);
    s1.display();
    s2.display();
    return 0;
 }