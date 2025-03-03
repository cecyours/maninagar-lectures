#include <iostream>
#include <stdexcept> // Include for runtime_error
using namespace std;

int main()
{
    int a, b, c;

    cout << "Enter 2 numbers: ";
    cin >> a >> b;

    try
    {
        if (b == 0)
            throw runtime_error("Missing value");

        c = a / b;

        cout << a << "/" << b << " = " << c << endl;
        if (c == 1)
        {
            throw logic_error("value  is not valid");
        }
        else
        {
            throw exception();
        }
    }
    catch (const runtime_error &e)
    {
        cout << "there is run time error : " << e.what() << endl;
    }
    catch (const logic_error &e)
    {
        cout << "there is logic error : " << e.what() << endl;
    }
    catch (...)
    {
        cout << "default error " << endl; // Display error message
    }

    cout << "rest code" << endl;
    return 0;
}
