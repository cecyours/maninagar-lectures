#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    cout << "Sum of first " << n << " numbers is " << sumN(n) << endl;
    return 0;
}

int sumN(int n)
{
    if (n == 0)
    {
        return 0;
    }
    else
    {
        return n + sumN(n - 1);
    }
}