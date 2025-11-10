#include <iostream>
using namespace std;
 
int getTotalMarks();
int main() {
    
    cout << "Total Marks: " << getTotalMarks() << endl;
    return 0;

}

int getTotalMarks() {
    
    int english = 85, math = 90, science = 80;
    return english + math + science;

}