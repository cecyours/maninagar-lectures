#include <iostream>
using namespace std;
int main()
{
    int a[100];
    int n;
    int data, i;

    cout << "Enter the no. of element : ";
    cin >> n;

    for (i = 0; i < n; i++)
    {
        cout << "Enter the data for index " << i << " : ";
        cin >> a[i];
    }

    cout << "\n--------------\n";

    cout << "Enter the data to search : ";
    cin >> data;

    cout << "\n--------------\n";

    int f = 1;
    for (i = 0; i < n; i++)
    {
        if (data == a[i])
        {
            f = 0;
            cout << data << " found at " << i << " index" << endl;
        }
    }

    if (f)
    {
        cout << data << " not found at any index" << endl;
    }

    //
    return 0;
}