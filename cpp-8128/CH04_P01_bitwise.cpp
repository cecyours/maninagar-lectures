#include <iostream>
using namespace std;

int main()
{
    int a = 7, b = 3, c;

    /**
     * Bitwise AND
     *
     * a => 0 1 1 1
     * b => 0 0 1 1
     * --------------
     * c => 0 0 1 1 => 3
     */

    c = a & b;
    cout << a << " & " << b << " = " << c << endl;

    /** 
     * bitwise OR
     * a => 0 1 1 1
     * b => 0 0 1 1
     * -------------
     * c => 0 1 1 1 => 7
      */

    c = a | b;
    cout << a << " | " << b << " = " << c << endl;



    /** 
     * bitwise ex-or
     * a => 0 1 1 1
     * b => 0 0 1 1
     * -------------
     * c => 0 1 0 0 => 4
      */

    c = a ^ b;
    cout << a << " | " << b << " = " << c << endl;


}

