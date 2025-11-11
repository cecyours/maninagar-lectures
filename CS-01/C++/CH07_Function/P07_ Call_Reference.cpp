#include <iostream>
using namespace std;

void doubleValues(int &x, int &y)
{
    x = x * 2;
    y = y * 2;
    cout << "Inside function: x = " << x << ", y = " << y << endl;
}

int main()
{
    int a = 4, b = 5;
    doubleValues(a, b);
    cout << "After doubling: a = " << a << ", b = " << b << endl;
    return 0;
}