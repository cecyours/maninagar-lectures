#include <iostream>
#define PI 3.14
using namespace std;

int main()
{
    cout << "PI before undef: " << PI << endl;

    #undef PI // Undefine the macro

    // cout << "PI after undef: " << PI << endl; // ERROR: PI is undefined now

    return 0;
}