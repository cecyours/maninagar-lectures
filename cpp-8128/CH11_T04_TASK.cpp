#include<stdio.h>
#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main()
{
    fstream file;

    string filename;

    cout<<"Enter file name : ";
    cin>>filename;

    string line;
    file.open(filename, ios::app|ios::out | ios::in);

    cout<<"Enter a string : ";
    cin>>line;
    // gets(line);
    
    cout<<line<<endl;
    file<<line<<endl;
    file<<"String length : "<<line.length()<<endl;
    file<<"String assign : "<<line.assign(" world")<<endl;
    file<<"    String at : "<<line.at(3)<<endl;
    file<<" String begin : "<<*line.begin()<<endl;
    file<<"String capacity : "<<line.capacity()<<endl;
    file<<" String empty : "<<line.empty()<<endl;
    file<<" String find : "<<line.find('h')<<endl;
    file<<" String end : "<<*line.end()<<endl;
    file<<" String erase : "<<line.erase()<<endl;

    file.seekg(0);
    while((getline(file,line)))
    {
        cout<<line<<endl;
    }
    file.close();
}