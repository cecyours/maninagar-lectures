#include<iostream>
using namespace std;
int main()
{

    int a,b;

    cout<<"Enter a & b : ";
    cin>>a>>b;

    try{

        if(b==0)
        {   
            throw  1;
        }
        else if(b<0)
        {
            throw (float)1.4;
        }
        else if(a>10)
        {
            throw "kites !!";
        }
        else {
            string s = "I am string !!";
            throw s;
        }

    }
    catch(int n)
    {
        cout<<"trigger for int "<<endl;
    }
    catch(float f)
    {
        cout<<"trigger for float "<<endl;
    }
    catch (const char *e)
    {
        cout<<"trigger for char *e : "<<*e<<endl;
    }
    catch(string s){
        cout<<"trigger for string : "<<s<<endl;

    }

}