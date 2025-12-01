#include <iostream>
#include <string>
using namespace std;

template <class T>
void show(T a)
{
    cout << "General Template: " << a << endl;
}

template <>
void show<string>(string a)
{
    cout << "Specialized Template for string: " << a << endl;
}
int main()
{
    show(10);
    show(3.14);
    show(string("Hello Tanvi!"));
    return 0;
}