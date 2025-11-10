#include <iostream>
 using namespace std;

void printRectangleArea(int length, int width);

int main() {
    printRectangleArea(5, 3); 
    return 0;
}

void printRectangleArea(int length, int width) {
    
    cout << "Area of rectangle: " << length * width << endl;

}
 