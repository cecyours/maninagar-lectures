#include <iostream>
using namespace std;

int main()
{
    try
    {
        cout << "Outer try block starts..." << endl;
        try
        {
            cout << "Inner try block starts..." << endl;
            throw "Inner exception occurred!";
        }
        catch (const char *e)
        {
            cout << "Inner catch: " << e << endl;
            throw; 
        }
    }
    catch (...)
    { 
        cout << "Outer catch: Exception handled again!" << endl;
    }
    return 0;
}
