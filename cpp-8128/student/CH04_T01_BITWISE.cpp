#include <iostream>
using namespace std;
int main()
{
    int a = 4, b = 6, c;

    /** a=> 0 1 0 0 = 4;
     *  b=> 0 1 1 0 = 6;
     *  ----------------
     *  c=> 0 1 0 0 = 4;
     * 
    */
    c = a & b;

    cout << "& Operator : " << c<<endl;

    /** a=> 0 1 0 0 = 4;
     *  b=> 0 1 1 0 = 6;
     *  ----------------
     *  c=> 0 1 1 0 = 6;
     * 
    */

    c = a | b;

    cout << "| Operator : " << c<<endl;

    /** a=> 0 1 0 0 = 4;
     *  b=> 0 1 1 0 = 6;
     *  ----------------
     *  c=> 0 0 1 0 = 2;
     * 
    */

    c = a ^ b;

    cout << "^ Operator : " << c<<endl;
}