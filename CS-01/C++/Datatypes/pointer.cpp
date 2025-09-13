#include <iostream>
using namespace std;

int main()
{
    char ch = 'p';
    char *p = &ch;
    *p += 1;

    cout << "Value of *p is : " << *p << endl;

}