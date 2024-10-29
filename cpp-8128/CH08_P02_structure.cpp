
#include <iostream>
using namespace std;

struct Student
{

    int id;
    string name;
};

int main()
{
    struct Student s[100];
    int n, i;

    cout << "Enter no. of student : ";
    cin >> n;

    cout << "Enter record : \n";
    for (i = 0; i < n; i++)
    {
        cout<<"\nEnter record for Student "<<i+1<<endl;
        
        cout<<"Enter id : ";
        cin>>s[i].id;


        cout<<"Enter name : ";
        cin>>s[i].name;
    }

    cout<<"============ Record ================\n";

    for(i=0;i<n;i++)
    {
        cout<<"Student "<<i+1<<" | "<<s[i].id<<", "<<s[i].name<<endl;
    }
}