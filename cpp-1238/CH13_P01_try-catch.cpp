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

        if(c == 1)
        {
            throw runtime_error("value  is not valid");
        }
            cout << a << "/" << b << " = " << c << endl;
    }
    catch (const exception& e) // Catch by reference
    {
        cout << "Ek badia si error ai: " << e.what() << endl; // Display error message
    }

    cout << "rest code" << endl;
    return 0;
}
