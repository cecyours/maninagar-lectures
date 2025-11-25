#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str1 = "Hello";
    string str2 = " World";
    
    str1.append(str2); 
    cout << "After append: " << str1 << endl;
    
    return 0;
}