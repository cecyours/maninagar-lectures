#include<iostream>
using namespace std;

void salaryIncrement(double *salary) // get the value of salary from function call
{
    *salary += *salary*0.10;

    cout<<"in funcation salary : "<<*salary<<"\taddress : "<<salary<<endl;
    
}

int main()
{

    double salary;

    cout<<"Enter your salary : ";
    cin>>salary;

    salaryIncrement(&salary);

    cout<<"Incremeted salary : "<<salary<<"\t address : "<<&salary<<endl;

    return 0;
}