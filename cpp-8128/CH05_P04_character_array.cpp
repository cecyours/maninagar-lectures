#include <iostream>
using namespace std;
int main()
{
    char name[100];

    cout << "Enter your name : ";
    cin >> name;

    cout << " your name : " << name<<endl;

    for(int i=0;name[i];i+=2)
    {
        cout<<" "<<name[i]<<endl;
    }
}