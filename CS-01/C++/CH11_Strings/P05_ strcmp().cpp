#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    // char str1[] = "Harshpreet";
    // char str2[] = "Harshpreet";

    char str1[] = "Apple";
    char str2[] = "Banana";
    
    int result = strcmp(str1, str2);
    
    if (result == 0)
        cout << "Both strings are equal!" << endl;
    else if (result < 0)
        cout << "First string is smaller." << endl;
    else
        cout << "First string is greater." << endl;
    
        return 0;
}