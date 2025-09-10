#include <iostream>
using namespace std;

int main()
{
    int x, y;
    
    cout << "Please enter two numbers :" << endl;
    cin >> x >> y;

    int z = x ^ y;

    cout << "Answer is :" << z << endl;
}