#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "Hello";
    
    str.append(3, '!');
    cout << "After append: " << str << endl;
    
    return 0;
}