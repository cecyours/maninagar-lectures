#include <iostream>
using namespace std;
int main()
{
    const int a = 10;

    // a = 39; // we can't change instance of const variable.
    cout << "the value of a : " << a << endl;
    return 0;
}