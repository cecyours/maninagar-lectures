#include <iostream>
using namespace std;

int main()
{
    int a[10][10][10], i, j, k, n, m, t;

    cout << "Enter the no. of table : ";
    cin >> n;

    cout << "Enter the no. of rows : ";
    cin >> m;

    cout << "Enter the no. of columns : ";
    cin >> t;


    int counter=0;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            for (k = 0; k < t; k++)
            {
                a[i][j][k] = ++counter;
            }
        }
    }

    cout << "---------------------------" << endl;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            for (k = 0; k < t; k++)
            {
                cout << " " << a[i][j][k] << "\t";
            }
            cout << endl;
        }
        cout << endl;
    }
}