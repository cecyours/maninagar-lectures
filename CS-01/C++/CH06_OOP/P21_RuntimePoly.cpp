#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {  
        cout << "Animal makes sound" << endl;
    }
 };

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

class Cat : public Animal {
public:
    void sound() override {
        cout << "Cat meows" << endl;
    }
};

int main() {
    Animal* a1;  
    Dog d;
    Cat c;
    
    a1 = &d;
    a1->sound();  
    a1 = &c;
    a1->sound(); 
    
    return 0;
}