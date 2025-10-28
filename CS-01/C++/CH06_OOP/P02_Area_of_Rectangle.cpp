#include <iostream>
using namespace std;

class Rectangle {
public:
    float length, breadth;

    void input() {
        cout << "Enter length and breadth: ";
        cin >> length >> breadth;
    }

    void area() {
        cout << "Area = " << length * breadth << endl;
    }
};

int main() {
    Rectangle r;
    r.input();
    r.area();
    return 0;
}
