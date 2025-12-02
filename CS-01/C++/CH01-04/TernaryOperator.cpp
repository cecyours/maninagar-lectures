#include <iostream>
using namespace std;

int main()
{
    int marks;
    cout << "Enter your marks" << endl;
    cin >> marks;

    cout << ((marks < 33) ? "Fail" : "Pass") << endl;
}
