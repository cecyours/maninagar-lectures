#include <iostream>
using namespace std;
int main()
{
    int a[10][10], r, c;
    int i, j;

    cout << "Enter row & columns : ";
    cin >> r >> c;

    cout << "Enter data : ";
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cin >> a[i][j];
        }
    }

    cout << "\n---------\n";

    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            cout << " " << a[i][j];
        }
        cout << endl;
    }
    return 0;
}