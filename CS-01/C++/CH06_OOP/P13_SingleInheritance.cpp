#include <iostream>
using namespace std;
class Parent {
public:
    void showParent() {
        cout << "This is Parent class." << endl;
    }
};
class Child : public Parent { // Single inheritance
public:
    void showChild() {
        cout << "This is Child class." << endl;
    }
};
int main() {
    Child c;
    c.showParent(); // from parent
    c.showChild();  // from child
    return 0;
}