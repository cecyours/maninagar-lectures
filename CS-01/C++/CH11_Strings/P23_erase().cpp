#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "Hello World";

    // Erase 6 characters starting from index 5
    str.erase(5, 6);
    cout << "After erase: " << str << endl;
    
    return 0;
}