#include <iostream>
using namespace std;

int main()
{
    int x, y;
    
    cout << "Please enter two numbers :" << endl;
    cin >> x >> y;

    cout << "Shifted version of x << y is :" << (x << y) << endl;
}