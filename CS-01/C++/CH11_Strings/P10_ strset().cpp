#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str[] = "Hello World";

    cout << "Original String: " << str << endl;

    strset(str, '*'); 
    cout << "After strset:  " << str << endl;
    
    return 0;
}