#include <iostream>
using namespace std;

int main() {
    int num;
    
    cout << "Please enter a positive number :";
    cin >> num;

    if(num < 0)
    {
        cerr << "Error : the entered number is negative";
    }
    else
    {
        cout << "The number is : " << num << endl;
    }
}