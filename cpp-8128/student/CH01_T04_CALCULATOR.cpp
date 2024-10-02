#include <iostream>
using namespace std;
class cal
{
public:
    int add(int a, int b)
    {
        return a + b;
    }
    int sub(int a, int b)
    {
        return a - b;
    }
    int multi(int a, int b)
    {
        return a * b;
    }
    int div(int a, int b)
    {
        return a / b;
    }
    int modul(int a, int b)
    {
        return a % b;
    }
};

int main()
{
    cal c;

    int a, b;
    char n, d;

    do
    {
        cout << "Enter the value of a : ";
        cin >> a;

        cout << "Enter the value of b : ";
        cin >> b;

        cout << "Enter the symbol for calculation : ";
        cin >> n;

        if (n == '+')
        {
            cout << "Addition : " << c.add(a, b) << endl;
        }
        else if (n == '-')
        {
            cout << "Substraction : " << c.sub(a, b) << endl;
        }
        else if (n == '*')
        {
            cout << "Multiplication : " << c.multi(a, b) << endl;
        }
        else if (n == '/')
        {
            cout << "Division : " << c.div(a, b) << endl;
        }
        else if (n == '%')
        {
            cout << "Modulos : " << c.sub(a, b) << endl;
        }
        else
        {
            cout << "Invalid symbol!! Try with correct one!!" << endl;
        }

        cout << "Do you want to continue {y/n} : ";
        cin >> d;
    } while (d == 'Y' || d == 'y');
}