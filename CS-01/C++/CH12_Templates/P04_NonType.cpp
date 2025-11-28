#include <iostream>
using namespace std;

template <class T, int size>

class Array
{
private:
    T arr[size];

public:
    void input()
    {
        cout << "Enter " << size << " elements:\n";
        for (int i = 0; i < size; i++)
            cin >> arr[i];
    }
    void display()
    {
        cout << "Array elements: ";
        for (int i = 0; i < size; i++)
            cout << arr[i] << " ";
        cout << endl;
    }
};

int main()
{
    Array<int, 5> intArray; 
    intArray.input();
    intArray.display();
    
    Array<float, 3> floatArray; 
    floatArray.input();
    floatArray.display();
    
    return 0;
}