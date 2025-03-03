#include<iostream>
using namespace std;

struct Student{
    int sId;
    string sName;

    struct Marks{
        double maths;
        double english;
        double science;
        double total;
    }m;
};

int main()
{
    struct Student s;

    cout<<"Enter the student id : ";
    cin>>s.sId;

    cout<<"Enter the student name : ";
    cin>>s.sName;

    cout<<"Enter marks for [maths, english, science] : ";
    cin>>s.m.maths>>s.m.english>>s.m.science;


    s.m.total= (s.m.english+s.m.maths+s.m.science);

    cout<<"your id : "<<s.sId<<"\t name : "<<s.sName<<endl;
    cout<<"maths : "<<s.m.maths<<"\t english : "<<s.m.english<<"\t science : "<<s.m.science<<endl;
    cout<<"total : "<<s.m.total<<endl;

}   