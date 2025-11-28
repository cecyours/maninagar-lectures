#include <iostream>
#include <vector>
#include <list>
using namespace std;

template <template <class, class...> class Container>
class DataPrinter
{
private:
    Container<int> data;

public:
    DataPrinter(initializer_list<int> lst) : data(lst) {}
    void display()
    {
        for (auto &val : data)
            cout << val << " ";
        cout << endl;
    }
};

int main()
{
    DataPrinter<vector> v({1, 2, 3, 4, 5});
    DataPrinter<list> l({10, 20, 30, 40, 50});
    
    cout << "Vector Data: ";
    v.display();
    
    cout << "List Data: ";
    l.display();
    
    return 0;
}