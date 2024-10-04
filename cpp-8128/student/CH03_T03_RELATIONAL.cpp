#include <iostream>
using namespace std;

int main()
{
    int a, b, c;

    cout << "Enter three number {a,b,c} : ";
    cin >> a >> b >> c;

    if (a > b)
    {
        if (a > c)
        {
            cout << "A is maximum!!";
        }
        else
        {
            cout << "C is maximum!!";
        }
    }
    else
    {
        if (b > c)
        {
            cout << "B is maximum!!";
        }
        else
        {
            cout << "C is maximum!!";
        }
    }
}