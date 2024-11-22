#include<iostream>
#include<string.h>
using namespace std;

int main()
{
    char name[] = "AAC";

    cout<<"string : "<<name<<endl;

    cout<<"length : "<<strlen(name)<<endl;

    char kites[100];
    char *p = strcpy(kites,name);
    cout<<"strcpy : "<<p<<endl;
    cout<<"strcpy : "<<kites<<endl;

    char k[] = "ABC";
    // cout<<"strlwr : "<<strlwr(name);
    cout<<"strcmp : "<<strcmp(k,kites)<<endl;

    p = strchr(k,'A');
    cout<<"strstr : "<<strstr(k,"B")<<endl;
    cout<<"strchr : "<<p<<endl;

    // cout<<"strrev : "<<strrev(k)<<endl;
    // cout<<"strset : "<<strset(k,'*')<<endl;

}