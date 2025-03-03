#include <iostream>
using namespace std;

struct Student
{
    int id;
    string name;

    struct Marks
    {
        double maths;
        double english;
        double science;
    } m;
};

int getResult(struct Student k)
{
    if (k.m.maths < 33 || k.m.english < 33 || k.m.science < 33)
    {
        return 0;
    }
    return 1;
}
int main()
{
    struct Student s;

    cout << "Enter student id : ";
    cin >> s.id;

    cout << "Enter student name : ";
    cin >> s.name;

    cout << "Enter marks for maths: ";
    cin >> s.m.maths;

    cout << "Enter marks for english: ";
    cin >> s.m.english;

    cout << "Enter marks for Science: ";
    cin >> s.m.science;

    cout << "your name : " << s.name << ", id : " << s.id << endl;
    cout << "   maths : " << s.m.maths << endl;
    cout << " english : " << s.m.english << endl;
    cout << " science : " << s.m.science << endl;

    int f = getResult(s);

    if (f)
    {
        cout << "Passed";
    }
    else
    {
        cout << "failed";
    }
    return 0;
}