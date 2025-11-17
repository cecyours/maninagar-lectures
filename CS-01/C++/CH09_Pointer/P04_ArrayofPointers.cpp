#include <iostream>
using namespace std;
int main()
{
    int a = 10, b = 20, c = 30;
    int *arrPtr[3]; 
    arrPtr[0] = &a;
    arrPtr[1] = &b;
    arrPtr[2] = &c;
    for (int i = 0; i < 3; i++)
    {
         cout << "Value at arrPtr[" << i << "] = " << *arrPtr[i] << endl;
    }
    return 0;
}