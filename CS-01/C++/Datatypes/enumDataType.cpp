#include <iostream>
using namespace std;

int main()
{
    enum day {MON = 1, TUE, WED, THU = 101, FRI};

    day d = FRI;

    cout << d << endl;
}