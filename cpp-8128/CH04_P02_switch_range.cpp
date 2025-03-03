#include <iostream>
using namespace std;

int main()
{
    int r;

    cout << "Enter your rollno : ";
    cin >> r;

    switch (r)
    {
    case 1 ... 10:
        cout << "Primary group" << endl;
        break;

    case 11 ... 20:
        cout << "secondary group" << endl;
        break;

    default:
        break;
    }
}