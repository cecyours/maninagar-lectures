#include <iostream>
using namespace std;

int main()
{
    int a[100], i, n;

    cout << "Enter the size of array : ";
    cin >> n;

    for (i = 0; i < n; i++)
    {
        cout << "Enter element for a [ " << i << " ] : ";
        cin >> a[i];
    }

    cout << "---------" << endl;

    for (i = 0; i < n; i++)
    {
        cout << "a[ " << i << " ] = " << a[i] << ", " << a[i] * a[i] << endl;
    }
}