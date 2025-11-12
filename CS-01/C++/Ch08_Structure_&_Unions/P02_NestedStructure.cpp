#include <iostream>
using namespace std;

struct Address
{
    string city;
    string state;
    int pinCode;
};

struct Employee
{
    string name;
    int id;
    Address addr;
};

int main()
{
    Employee e1;
    
    e1.name = "Riya";
    e1.id = 102;
    e1.addr.city = "Ahmedabad";
    e1.addr.state = "Gujarat";
    e1.addr.pinCode = 380001;
    
    cout << "Employee Details:\n";
    cout << "Name: " << e1.name << endl;
    cout << "ID: " << e1.id << endl;
    cout << "City: " << e1.addr.city << endl;
    cout << "State: " << e1.addr.state << endl;
    cout << "Pin Code: " << e1.addr.pinCode << endl;
    
    return 0;
}