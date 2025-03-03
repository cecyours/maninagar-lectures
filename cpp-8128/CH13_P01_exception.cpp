
#include<iostream>
using namespace std;
int main()
{
    int a=2,b=-1;


    try{
            if(b==0)
            {
                string s = "THis is not a bad idea";
                throw s;
            }
            if(b==-1)
            {
                throw "How ever this is not good!!";
            }
         float c = a/b;
         cout<<"the c : "<<c<<endl;
    }
     catch(const char *e)
    {
        cout<<"this is my "<<e<<endl;
    }

    catch(string e)
    {
        cout<<"this is my "<<e<<endl;
    }
   

    cout<<"Hello World";
}