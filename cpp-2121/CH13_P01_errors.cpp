

#include <iostream>
using namespace std;

int main()
{
    int a = 5, b = 2;
    int ax[10];
    try
    {
        if (b == 0)
        {
            throw runtime_error("number is not valid");
        }
        cout << "ans : " << a / b << endl;
        cout<<"element handle  : "<<ax[30]<<endl;
    }
    catch (exception e)
    {
        cout << "error is occured !!";
    }
    cout << "Hello World :: " << endl;
}