#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "HELLO";
    cout << "Characters in string: ";

    for (auto it = str.begin(); it != str.end(); ++it)
    {
        cout << *it << " ";
    }
    
    return 0;
}