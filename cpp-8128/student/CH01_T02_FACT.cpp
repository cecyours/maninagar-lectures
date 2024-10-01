#include <iostream>
using namespace std;
int fact(int a)
{
    int fact = 1, i;

    for (i = 1; i <= a; i++)
    {
        fact = fact * i;
    }

    return fact;
}

int main()
{
    int a;

    cout << "Enter the number : ";
    cin >> a;

    cout << "Factorial of a is : " << fact(a);;

}