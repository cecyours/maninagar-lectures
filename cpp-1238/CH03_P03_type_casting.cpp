#include <iostream>
using namespace std;
int main()
{
    int i = 10;
    float f = i; // implicit type cast (small -> large)

    cout << "implicit type cast int " << i << endl;
    cout << "implicit type cast float " << f << endl;


    f = 9.3;
    i = f;
    cout << "explicit type cast float " << f << endl;
    cout << "explicit type cast int " << i << endl;

    return 0;
}