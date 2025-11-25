#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "HELLO";
    cout << "Character at index 0: " << str.at(0) << endl;
    cout << "Character at index 3: " << str.at(3) << endl;
    
    try
    {
        cout << "Character at index 10: " << str.at(10) << endl;
    }
    catch (out_of_range &e)
    {
        cout << "Exception: " << e.what() << endl;
    }
    
    return 0;
}