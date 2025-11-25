#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "Old Value";
    
    cout << "Before assign: " << str << endl;
    str.assign("New Value Assigned");
    cout << "After assign: " << str << endl;
    
    return 0;
}