#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char name[100];
    
    cout << "Enter your name in lowercase: ";
    cin.getline(name, 100);
    cout << "Before conversion: " << name << endl;
    
    strupr(name);

    cout << "After conversion:  " << name << endl;
    return 0;
}