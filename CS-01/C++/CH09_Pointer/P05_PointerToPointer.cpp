
#include <iostream>
using namespace std;

int main()
{
    int a = 50;
    int *ptr = &a;
    int **ptr2 = &ptr;

    cout << "Value of a: " << a << endl;
    cout << "Value via ptr: " << *ptr << endl;
    cout << "Value via ptr2: " << **ptr2 << endl;

    return 0;
}