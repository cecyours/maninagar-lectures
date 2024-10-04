#include <iostream>
using namespace std;
int main()
{
    int a, b, c;

    cout << "Enter the Number : " << endl;
    cin >> a >> b;

    try
    {
        if (b == 0)
            throw runtime_error("bacha le bhagavan");

        c = a / b;

        if (c == 1)
            throw runtime_error("un valid code ");

        cout << a << "/" << b << " = " << c << endl;
    }
    catch (const exception &e)
    {
        cout << "Mujhase to  nhii hoga " << e.what() << endl;
    }

    cout << "rest code" << endl;
    return 0;
}
