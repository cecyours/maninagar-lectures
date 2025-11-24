#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char name[100];
    
    cout << "Enter your full name (in uppercase): ";
    cin.getline(name, 100);
    cout << "Before: " << name << endl;
    
    strlwr(name);
    cout << "After: " << name << endl;
    
    return 0;
}
