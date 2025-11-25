#include <iostream>
#include <string>
using namespace std;

int main()
{
    string source = "Programming";
    string target;
    
    target.assign(source, 0, 7);
    cout << "target = " << target << endl;
    
    return 0;
}