#include <iostream>
using namespace std;

void tableOfFive();
int main() {
    
    tableOfFive(); 
    return 0;
}
 
void tableOfFive() {
    
    for(int i = 1; i <= 10; i++) {
        cout << "5 x " << i << " = " << 5*i << endl;
    }
    
}