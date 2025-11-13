#include <iostream>
using namespace std;

struct Student
{
    int rollNo;
    string name;
    float marks;
};

void updateMarks(Student &s, float newMarks)
{
    s.marks = newMarks;
}
int main()
{
    Student s1 = {101, "Tanvi", 95.5};
    cout << "Before update: " << s1.marks << endl;
    updateMarks(s1, 99.0);
    cout << "After update: " << s1.marks << endl;
    return 0;
}