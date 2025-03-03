#include <iostream>
using namespace std;
int main()
{
    int a = 0;
    cout << "Line 1" << endl;
    cout << "Line 2" << endl;
    goto skip;
    cout << "Line 3" << endl;
    cout << "Line 4" << endl;
skip:
    cout << "Line 5" << endl;
    cout << "Line 6" << endl;
    cout << "Line 7" << endl;
    if (a < 5)
    {
        a++;
        goto skip;
    }
    cout << "Line 8" << endl;
    cout << "Line 9" << endl;
    cout << "Line 10" << endl;
}