#include <iostream>
using namespace std;
int main()
{
    int a[100], i, n, x=0, y;

    cout << "Enter the size of array : ";
    cin >> n;

    cout << "Enter the array : " << endl;

    for (i = 0; i < n; i++)
    {
        cout << "Enter the value of a{ " << i << " } : ";
        cin >> a[i];
    }

    cout << "----------------------------------------------"<<endl;
    for (i = 0; i < n; i++)
    {
        cout << "Value of a{ " << i << " } : " << a[i] << " , " << a[i] * a[i] << endl;
    }
    cout << "----------------------------------------------"<<endl;

    
    for ( i = 0; i < n; i++)
    {
        x+=a[i];
    }
    cout<<"Sum of array elements : "<<x<<endl;
}