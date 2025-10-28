#include<iostream>
using namespace std;

class Student
{
public:
    string name;
    int age;

    Student() {
        name = "Unknown";
        age = 0;
        cout << "Default Constructor called" << endl;
    }

    void display(){
        cout << "Name: "<< name << ", Age:" << age << endl;
    }
};

int main(){


    Student s1; 
    s1.display();
    return 0;
}