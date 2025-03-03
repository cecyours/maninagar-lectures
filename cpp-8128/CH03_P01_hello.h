#include <iostream>

using namespace std;
class Book
{

public:
    int id;
    string bookName;

    void getData()
    {
        cout<<"  Id : "<<id<<endl;
        cout<<"Name : "<<bookName<<endl;
    }
};