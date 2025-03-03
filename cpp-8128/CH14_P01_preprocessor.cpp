#include<iostream>
using namespace std;
#define A 300

int main()
{
    cout<<"value of A : "<<A<<endl;


    #ifdef A
        cout<<"A is alread define with "<<A<<endl;
    #endif

    #undef A

    #ifndef A
        cout<<"A is not define !!"<<endl;
    #endif

    #define A 400

    #if A == 300
        cout<<"Value is A "<<A<<endl;
    #elif A == 200
        cout<<"I am newbie"<<endl;
    #else   
        cout<<"Denver are kites !!"<<endl;
    #endif

}