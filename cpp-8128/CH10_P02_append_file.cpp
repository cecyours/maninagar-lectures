#include<iostream>
#include<fstream>

using namespace std;
int main()
{

    string fName;
    fstream file;

    cout<<"Enter file name : ";
    cin>>fName;

    file.open(fName,ios::out|ios::app);

    string line;

    cout<<"Enter details for file : ";
    cin>>line;

    file<<line<<endl;
    file.close();
    cout<<"Operation completed !!\n";

}