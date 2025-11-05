 #include <iostream>
 using namespace std;

class Shape {
    public:
    virtual void draw() = 0;
};

class Circle : public Shape {
    public:
    void draw() {
        cout << "Drawing Circle" << endl;
    }
};
class Rectangle : public Shape {
    public:
    void draw() {
        cout << "Drawing Rectangle" << endl;
    }
};

int main() {
    Shape* s1;     
    Circle c1;
    Rectangle r1;
    
    s1 = &c1;
    s1->draw();   
    s1 = &r1;
    s1->draw();   
    return 0;
}