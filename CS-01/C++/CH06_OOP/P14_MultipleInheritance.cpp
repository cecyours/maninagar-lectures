#include <iostream>
using namespace std;

class Grandparent {
public:
    void showGP() { cout << "Grandparent class." << endl; }
};

class Parent : public Grandparent {
public:
    void showParent() { cout << "Parent class." << endl; }
};

class Child : public Parent {
public:
    void showChild() { cout << "Child class." << endl; }
};

int main() {
    Child c;
    c.showGP();
    c.showParent();
    c.showChild();
    return 0;
}
