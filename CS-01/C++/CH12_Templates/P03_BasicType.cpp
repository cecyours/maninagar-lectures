#include <iostream>
using namespace std;

template <typename T>
T square(T num)
{
    return num * num;
}

int main()
{
    cout << "Square of int: " << square(5) << endl;
    cout << "Square of double: " << square(3.14) << endl;
    
    return 0;
}
