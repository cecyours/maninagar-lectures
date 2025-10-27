#include<iostream>
using namespace std;

class student
{
public:
    string name;
    int age;

    void display(){
        cout << "Name: "<< name << ", Age:" << age << endl;
    }
};

int main(){
    student s1, s2;

    s1.name = "Tanvi";
    s1.age = 22;

    s2.name = "Harshpreet";
    s2.age = 18;

    s1.display();
    s2.display();
    return 0;
}