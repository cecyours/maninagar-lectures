#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str[] = "C++ programming is powerful";
    char word[] = "programming";
    char *result = strstr(str, word); 

    if (result)
        cout << "Substring found: " << result << endl;
    else
        cout << "Substring not found!" << endl;
        
    return 0;
}