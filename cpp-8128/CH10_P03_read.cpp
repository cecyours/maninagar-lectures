#include<iostream>
#include<fstream>
using namespace std;
int main()
{
    fstream file;

    file.open("./CH10_P02_append_file.cpp",ios::in);

    string line;
    cout<<"status : "<<file.eof()<<endl;

    while(!(file.eof()))
    {
        getline(file,line);
        cout<<line<<endl;
    }
    cout<<"status : "<<file.eof()<<endl;
    file.close();
}