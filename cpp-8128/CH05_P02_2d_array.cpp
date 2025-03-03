#include <iostream>

using namespace std;

int main()
{
    int a[10][10], i, j, r, c;

    cout << "Enter the number of rows : ";
    cin >> r;

    cout << "Enter the number of columns : ";
    cin >> c;

    cout << "Enter the elements : " << endl;

    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cin >> a[i][j];
        }
    }

    cout << "\n-----------\n";

    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cout << " " << a[i][j] << "\t";
        }
        cout << endl;
    }
}