#include <iostream>
using namespace std;

class BankAccount {
    
private:
    double balance;  // private → cannot access directly

public:
    // Setter
    void setBalance(double b) {
        if (b >= 0) 
            balance = b;
        else
            cout << "Invalid balance!" << endl;
    }
    // Getter
    double getBalance() {
        return balance;
    }
 };
int main() {
    
    BankAccount acc;
    acc.setBalance(5000); // Setting balance
    cout << "Account Balance: " << acc.getBalance() << endl;
    // acc.balance = 10000;  Error → private data cannot be accessed directly
    return 0;
}