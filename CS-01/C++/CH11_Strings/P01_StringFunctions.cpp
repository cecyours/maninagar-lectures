#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s1[20] = "Hello";
    char s2[20] = "World";
   
    cout << "Length of s1: " << strlen(s1) << endl;
    
    strcat(s1, s2);
    
    cout << "After concatenation: " << s1 << endl;
    
    strcpy(s2, "C++");
    
    cout << "After copy: " << s2 << endl;
    
    return 0;
}