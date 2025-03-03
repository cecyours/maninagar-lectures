#include<iostream>
#include<string.h>
using namespace std;
int main()
{
    string s="hsjfbjasfa";

    cout<<"Empty : "<<s.empty()<<endl;
    cout<<"End : "<<*s.end()<<endl;
    cout<<"Erase : "<<s.erase(3)<<endl;
    cout<<"Find : "<<s.find("s")<<endl;

    string l = "hello";
    s.swap(l);
    cout<<"Swap : "<<s<<endl;
    cout<<"Swap : "<<l<<endl;
    

}