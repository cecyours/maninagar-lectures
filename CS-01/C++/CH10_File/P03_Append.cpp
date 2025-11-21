#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ofstream fout("demo.txt", ios::app); 
    
    fout << "This line is appended at the end.\n";
    fout.close();
    
    cout << "Content appended successfully!" << endl;
    
    return 0;
}