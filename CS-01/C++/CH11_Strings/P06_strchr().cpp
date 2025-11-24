#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    // char str[] = "Learning C++ is fun!";
    // char ch = 'C';

    char str[] = "Hello World";
    char ch = 'z';
    
    char *ptr = strchr(str, ch);
    
    if (ptr)
        cout << "Character found: " << ptr << endl;
    else
        cout << "Character not found!" << endl;
    
    return 0;
}