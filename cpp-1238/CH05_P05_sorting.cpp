#include <iostream>
using namespace std;
int main()
{
    int a[100], i, j, n, temp;

    cout << "Enter the no. of element : ";
    cin >> n;

    for (i = 0; i < n; i++)
    {
        cout << "Enter the data for index " << i << " : ";
        cin >> a[i];
    }

    cout << "\n--------------\n";

    // sorting

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (a[i] > a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    for (i = 0; i < n; i++)
    {
        cout << " a[ " << i << "] = " << a[i] << endl;
    }

    return 0;
}