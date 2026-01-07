#include <iostream>
#include <string>
using namespace std;

template <class T>
class DisplayData
{
public:
    DisplayData(T data)
    {
        cout << "General Template: " << data << endl;
    }
};

template <>
class DisplayData<string>
{
public:
    DisplayData(string data)
    {
        cout << "Specialized Template for string: " << data << endl;
    }
};
int main()
{
    DisplayData<int> obj1(10);
    DisplayData<double> obj2(3.14);
    DisplayData<string> obj3("Tanvi");
    return 0;
}