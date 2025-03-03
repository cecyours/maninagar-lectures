#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    ofstream file;

    string fileName;

    cout<<"Enter file Name : ";
    cin>>fileName;

    file.open(fileName);
    string line;
    while(file)
    {
        cout<<"Enter record press -1 to exit : ";
        getline(cin,line);

        if(line=="-1")
        {
            cout<<"exiting...."<<endl;
            break;
        }

        file<<line<<endl;
    }
    file.close();

    fstream readFile;

    readFile.open(fileName);
    cout<<"\n-------------\n";
    while((getline(readFile,line)))
    {
        cout<<line<<endl;
    }

    readFile.close();
}