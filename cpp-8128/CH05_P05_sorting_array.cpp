#include <iostream>
using namespace std;

int main()
{
    int a[100], i, n, j, temp;

    cout << "Enter the no. element ";
    cin >> n;

    cout << "Enter the elements : " << endl;
    for (i = 0; i < n; i++)
    {
        cout << " a [" << i << "] = ";
        cin >> a[i];
    }

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
    cout << "sorted array : " << endl;
    for (i = 0; i < n; i++)
    {
        cout << " a [" << i << "] = " << a[i] << endl;
    }
}