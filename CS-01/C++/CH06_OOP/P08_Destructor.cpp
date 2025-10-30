#include <iostream>
using namespace std;
class Student {
public:
    string name;

    Student(string n) {
        name = n;
        cout << "Constructor called for " << name << endl;
    }
   
    ~Student() {
        cout << "Destructor called for " << name << endl;
    }
    void display() {
        cout << "Name: " << name << endl;
    }
};
int main() {
    Student s1("Tanvi");  
    s1.display();
    Student s2("Harshpreet");  
    s2.display();
    return 0;
}