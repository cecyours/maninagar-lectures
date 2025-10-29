#include <iostream>
 using namespace std;
 class Rectangle {
 public:
    int length, width;
    Rectangle() : length(10), width(5) {
        cout << "Rectangle created with default dimensions." << endl;
    }
    int area() {
        return length * width;
    }
 };
 int main() {
    Rectangle r1;
    cout << "Area of rectangle = " << r1.area() << endl;
    return 0;
 }