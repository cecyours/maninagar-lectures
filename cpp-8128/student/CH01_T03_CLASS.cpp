#include <iostream>
using namespace std;
class student
{
    int rollno, contact;
    string name;

public:
    void setrollno(int r)
    {
        rollno = r;
    }
    void setname(string n)
    {
        name = n;
    }
    void setcontact(int c)
    {
        contact = c;
    }

    int getrollno()
    {
        return rollno;
    }

    string getname()
    {
        return name;
    }

    int getcontact()
    {
        return contact;
    }
};

int main()
{
    student s;
    s.setrollno(3);
    s.setname("XYZ");
    s.setcontact(444);

    cout<<"Your Roll no : "<< s.getrollno()<<endl;
    cout<<"Your name    : "<< s.getname()<<endl;
    cout<<"Your contact : "<< s.getcontact()<<endl;
}