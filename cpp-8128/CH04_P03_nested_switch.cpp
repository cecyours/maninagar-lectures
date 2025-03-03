#include <iostream>
using namespace std;

int main()
{
    int r;
    char div;

    cout << "Enter your div-rollno : ";
    cin >> div >> r;

    switch (div)
    {
    case 'a':
    case 'A':
        switch (r)
        {
        case 1 ... 10:
            cout << "A alpha grp" << endl;
            break;

        case 11 ... 20:
            cout << "A beta grp" << endl;
            break;

        case 21 ... 30:
            cout << "A gama grp" << endl;
            break;

        default:
            cout << "A north grp" << endl;
            break;
        }
        break;

    case 'b':
    case 'B':
        switch (r)
        {
        case 1 ... 10:
            cout << "B alpha grp" << endl;
            break;

        case 11 ... 20:
            cout << "B beta grp" << endl;
            break;

        case 21 ... 30:
            cout << "B gama grp" << endl;
            break;

        default:
            cout << "B north grp" << endl;
            break;
        }
    default:
        cout << "audience grp" << endl;
    }
}