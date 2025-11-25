#include <iostream>
#include <string>
using namespace std;

int main()
{
    string word = "hello";
   
    *word.begin() = 'H';
    cout << "Modified string: " << word << endl;
   
    return 0;
}