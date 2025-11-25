#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str1 = "I love ";
    string str2 = "Programming in C++";
    
    str1.append(str2, 0, 11); 
    cout << "After append: " << str1 << endl;
    
    return 0;
}
