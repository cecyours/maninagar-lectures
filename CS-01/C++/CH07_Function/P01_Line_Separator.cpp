#include <iostream>
using namespace std;
 
void printLine();
int main() {
   
    cout << "First Line" << endl;
   
    printLine(); // function call
   
    cout << "Second Line" << endl;
    return 0;
}
 
void printLine() {
    cout << "------------------------" << endl;
}