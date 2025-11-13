#include <iostream>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

int main() {

    Student s[3];

    for (int i = 0; i < 3; i++) {
        cout << "Enter Roll No: ";
        cin >> s[i].rollNo;
        cin.ignore();
        cout << "Enter Name: ";
        getline(cin, s[i].name);
        cout << "Enter Marks: ";
        cin >> s[i].marks;
        cout << "---------------------\n";
    }

    cout << "\nStudent Details:\n";
    for (int i = 0; i < 3; i++) {
        cout << "Roll No: " << s[i].rollNo
             << ", Name: " << s[i].name
             << ", Marks: " << s[i].marks << endl;
    }

    return 0;
}
