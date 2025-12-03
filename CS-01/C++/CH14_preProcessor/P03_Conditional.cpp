#include <iostream>
using namespace std;

#define VERSION 2
int main()
{
#if VERSION == 1
    cout << "You selected Version 1" << endl;
#elif VERSION == 2
    cout << "You selected Version 2" << endl;
#else
    cout << "You selected some other version" << endl;
#endif
    cout << "Program is running..." << endl;
    return 0;
}