#include <iostream>
using namespace std;

int main()
{
    try
    {
        int x;
        cout << "Enter a number (0, 1, or any other): ";
        cin >> x;
        if (x == 0)
            throw 0; 
        else if (x == 1)
            throw 1.5; 
        else
            throw "Unknown input"; 
    }
    catch (int e)   
    {
        cout << "Caught an integer exception!" << endl;
    }
    catch (double e)
    {
        cout << "Caught a double exception!" << endl;
    }
    catch (const char *e)
    {
        cout << "Caught a string exception: " << e << endl;
    }
    return 0;
}
