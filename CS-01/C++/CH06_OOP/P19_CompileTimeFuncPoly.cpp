#include <iostream>
using namespace std;

class Math {
public:
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    
    Math m;
    
    cout << "Sum (int): " << m.add(10, 20) << endl;
    cout << "Sum (double): " << m.add(5.5, 4.5) << endl;
    cout << "Sum (3 ints): " << m.add(1, 2, 3) << endl;
    
    return 0;
}