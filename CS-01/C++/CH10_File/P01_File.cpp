#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    
    ofstream fout;         
    
    fout.open("demo.txt"); 
    fout << "Hello Students!\n";
    fout << "Welcome to File Handling in C++.\n";
    
    fout.close(); 
    cout << "Data written successfully." << endl;
    
    return 0;
}