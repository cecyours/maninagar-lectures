#include<iostream>
using namespace std;
struct Student
{
    string name;
    int age;
    int marks;
};
int main()
{
    Student student1;

    student1.name = "Harshita Rajput";
    student1.age = 18;
    student1.marks = 80;

    cout<<"Student Name:- "<<student1.name <<endl;
    cout<<"Student Age:- "<<student1.age<<endl;
    cout<<"Student Marks:- "<<student1.marks <<endl;

}