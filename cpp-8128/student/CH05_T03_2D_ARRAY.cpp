#include <iostream>
using namespace std;

int main()
{
    int a[10][10], i, j, n, m;

    cout << "Enter the no. of rows : ";
    cin >> n;

    cout << "Enter the no. of columns : ";
    cin >> m;

    cout << "Enter the array : " << endl;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            cin >> a[i][j];
        }
    }

    cout<<"---------------------------"<<endl;
    
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            cout<<" "<<a[i][j]<<"\t";
        }
        cout<<endl;
    }
}