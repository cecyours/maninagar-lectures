#include <iostream>
using namespace std;

int main()
{
    int a = 10;
    int *ptr = &a;

    cout << "Value of a: " << a << endl;
    cout << "Address of a: " << &a << endl;
    cout << "Pointer points to value: " << *ptr << endl;
    cout << "Pointer address: " << ptr << endl;
    
    return 0;
}