#include <iostream>
#include <string>
using namespace std;

int main()
{
    string s1 = "Apple";
    string s2 = "Banana";
    
    int result = s1.compare(s2);
    
    if (result == 0)
        cout << "Both strings are equal." << endl;
    else if (result < 0)
        cout << s1 << " comes before " << s2 << endl;
    else
        cout << s1 << " comes after " << s2 << endl;
    
    return 0;
}