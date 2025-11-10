#include <iostream>
using namespace std;
 
int findMax(int a, int b);
int main() {
    
    int result = findMax(25, 40);
    cout << "Maximum number is " << result << endl;
    return 0;

}
 
int findMax(int a, int b) {
   
    if(a > b)
        return a;
    else
        return b;

}