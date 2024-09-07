#include <iostream>
using namespace std;

union Task
{
    int i;
    char ch;
};

int main()
{
    union Task t;


    t.i = 99;
    cout << " integer : " << t.i << endl;
    t.ch = 'B';
    cout << " character : " << t.ch << endl;
    return 0;
}