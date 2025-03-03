
#include <iostream>
using namespace std;

int flag(int x)
{
    if (x > 100)
        return -1;
    else if (x <= 100 && x >= 0)
        return 0;
    else
        exit(0);
}

int main()
{
    int y;

    cout << "enter value for y : ";
    cin >> y;

    int ans = flag(y);

    cout << "return value : " << ans << endl;
}