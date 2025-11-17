#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr; 
    cout << "First element: " << *ptr << endl;
    ptr++; 
    cout << "Second element: " << *ptr << endl;
    ptr += 2; 
    cout << "Fourth element: " << *ptr << endl;
    
    return 0;
}