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

    s = "12xx3412321";

    cout<<"Empty : "<<s.empty()<<endl;
    cout<<"End : "<<*s.end()<<endl;
    cout<<"Erase : "<<s.erase(4)<<endl;

    cout<<"find : "<<s.find("s2")<<endl;

    string l = "kites";
    s.swap(l);
    cout<<"swap : "<<l<<endl;
    cout<<"swap : "<<s<<endl;
}