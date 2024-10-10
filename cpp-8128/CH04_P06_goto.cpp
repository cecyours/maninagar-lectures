#include <iostream>
using namespace std;

int main()
{
    int counter = 0;
    cout << "line 1" << endl;
    cout << "line 2" << endl;
    cout << "line 3" << endl;
    cout << "line 4" << endl;
    goto flag;
    cout << "line 5" << endl;
    cout << "line 6" << endl;
    cout << "line 7" << endl;
    cout << "line 8" << endl;
    cout << "line 9" << endl;
flag:
    cout << "line 10" << endl;
    cout << "line 11" << endl;
    cout << "line 12" << endl;
    if (counter < 100)
    {
        counter++;
        goto flag;
    }
    cout << "line 13" << endl;
}
