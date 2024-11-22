#include<iostream>
using namespace std;

int main()
{
    string s = "12345678928763561789";

    s.append("Bye");
    cout<<"append : "<<s<<endl;

    s.assign("Kites");
    cout<<"assign : "<<s<<endl;


    cout<<"at 3 : "<<s.at(3)<<endl;
    cout<<"begin  : "<<*s.begin()<<endl;

    cout<<"capacity : "<<s.capacity()<<endl;   
}