#include <iostream>
using namespace std;
int main()
{
    int a[100], i, j, f = 0, number, n;

    cout << "Enter the no. element ";
    cin >> n;

    cout << "Enter the elements : " << endl;
    for (i = 0; i < n; i++)
    {
        cout << " a [" << i << "] = ";
        cin >> a[i];
    }

    cout << "Element to search : ";
    cin >> number;

    for (i = 0; i < n; i++)
    {
        if (a[i] == number)
        {
            cout << number << " found" << endl;
            f = 1;
            break;
        }
    }

    if (!f)
    {
        cout << number << " not found !!" << endl;
    }
}