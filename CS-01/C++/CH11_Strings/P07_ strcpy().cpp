#include <iostream>
#include <cstring> 
using namespace std;

int main()
{
    char original[100] = "Learning C++ is fun!";
    char copy[100];
   
    strcpy(copy, original);
    cout << "Original String: " << original << endl;
    cout << "Copied String:   " << copy << endl;
    
    copy[9] = '*'; 
    cout << "\nAfter modification:" << endl;
    cout << "Original String: " << original << endl;
    cout << "Copied String:   " << copy << endl;
    
    return 0;
}