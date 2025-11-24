#include <iostream>
#include <cstring> 
using namespace std;

int main()
{
    
    char password[50];
    
    cout << "Enter your password: ";
    cin.getline(password, 50);
    
    int len = strlen(password);
    
    cout << "Password length: " << len << endl;
    
    if (len < 8)
        cout << " Password is too short. Must be at least 8 characters." << endl;
    else
        cout << " Password accepted." << endl;
    
    return 0;
}