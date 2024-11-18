#include<iostream>
using namespace std;

// x (int size)
union Student{
    int id;
    char div;
};

int main()
{

    union Student s;

    s.div = 'A';

    cout<<"Hello div : "<<s.div<<endl;


    s.id = 66;
    cout<<" Hello id : "<<s.id<<endl;

    cout<<"Hello div : "<<s.div<<endl;


}