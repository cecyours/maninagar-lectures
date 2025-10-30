#include <iostream>
using namespace std;
class Car {
    private:
        void engineStart() {   
            cout << "Engine started..." << endl;
        }
    public:
        void startCar() {      
            engineStart();
            cout << "Car is ready to drive!" << endl;
        }
};
 int main() {
    Car myCar;
    myCar.startCar();  
    // myCar.engineStart();  Not accessible (private)
    return 0;
 }