#include <iostream>
using namespace std;

int main()
{
    int i = 30;
    // small => large
    float f = i; // implicit type casting

    cout << "int  : " << i << endl;
    cout << "float  : " << f << endl;

    f = 5.3;
    i = f;

    cout << "int  : " << i << endl;
    cout << "float  : " << f << endl;
}