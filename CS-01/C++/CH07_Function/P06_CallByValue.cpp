#include <iostream>
using namespace std;

void swapNumbers(int x, int y)
{
    int temp = x;
    x = y;
    y = temp;
    cout << "Inside function: a = " << x << ", b = " << y << endl;
}

int main()
{
    int a = 10, b = 20;
    swapNumbers(a, b); 
    cout << "After function call: a = " << a << ", b = " << b << endl;
    return 0;
}