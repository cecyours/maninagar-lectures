#include<iostream>
#include<fstream>

using namespace std;
int main()
{

    string fName;
    fstream file;

    cout<<"Enter file name : ";
    cin>>fName;

    file.open(fName,ios::out|ios::app|ios::in);

    string line;

    cout<<"Enter details for file : ";
    cin>>line;

    file<<line<<endl;
   
    cout<<"Writting Operation completed !!\n";

    file.seekg(0);
    cout<<"tell me "<<file.tellg()<<endl;
    cout<<" file : ;;;"<<file.eof()<<" \n";

    while((getline(file,line)))
    {
        cout<<line<<endl;
    }

    cout<<" file : ;;; \n";
    file.close();

}