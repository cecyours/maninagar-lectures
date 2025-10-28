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

    void input(){
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter Age: ";
        cin >> age;
    }

    void display(){
        cout << "Name: "<< name << ", Age:" << age << endl;
    }
};

int main(){

    int n;
    cout << "student size? ";
    cin >> n;

    Student s[n];
    for(int i = 0; i < n; i++) {
        cout << "\nEnter details of student " << i + 1 << endl;
        s[i].input();
    }

    cout << "\n--- Student Details ---\n";
    for(int i = 0; i < n; i++) {
        s[i].display();
    }
    
    return 0;
}