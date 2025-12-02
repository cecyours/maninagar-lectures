#include <iostream>
using namespace std;

int sum(int num1, int num2)
{
    return (num1 + num2);
}

int main()
{
    int num1, num2;

    cout << "Enter two numbers : " << endl;
    cin >> num1 >> num2;

    int s = sum(num1, num2);

    cout << "Sum is :" << s << endl;
}