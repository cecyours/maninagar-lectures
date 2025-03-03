#include <iostream>

using namespace std;

int main()
{
    int a[10][10][10], i, j, k, t, r, c;

    int counter = 0;
    cout << "Enter the number of tables : ";
    cin >> t;

    cout << "Enter the number of rows : ";
    cin >> r;

    cout << "Enter the number of columns : ";
    cin >> c;

    cout << "Enter the elements : " << endl;

    for (i = 0; i < t; i++)
    {
        for (j = 0; j < r; j++)
        {
            for (k = 0; k < c; k++)
            {
                a[i][j][k] = ++counter;
            }
        }
    }

    for (i = 0; i < t; i++)
    {
        for (j = 0; j < r; j++)
        {
            for (k = 0; k < c; k++)
            {
                cout << " " << a[i][j][k] << "\t";
            }
            cout << endl;
        }
        cout << endl;
    }
}