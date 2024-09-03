
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
    } marks;
};

int main()
{
    struct Student s[10];
    int n, i;

    cout << "Enter number of student [1-10] : ";
    cin >> n;

    cout << "Enter data for those student : " << endl;
    for (i = 0; i < n; i++)
    {
        cout << "Enter record for student " << i + 1 << endl;

        cout << "Enter name : ";
        cin >> s[i].name;

        cout << "Enter id : ";
        cin >> s[i].id;

        cout << "Enter maths marks : ";
        cin >> s[i].marks.maths;

        cout << "Enter english marks : ";
        cin >> s[i].marks.english;

        cout << "Enter Science marks : ";
        cin >> s[i].marks.science;
    }

    for (i = 0; i < n; i++)
    {
        cout << "\n\nStudent : " << i + 1 << endl;
        cout << "     name : " << s[i].name << endl;
        cout << "       id : " << s[i].id << endl;
        cout << "    maths : " << s[i].marks.maths << endl;
        cout << "  science : " << s[i].marks.science << endl;
        cout << "  english : " << s[i].marks.english << endl;
    }
}