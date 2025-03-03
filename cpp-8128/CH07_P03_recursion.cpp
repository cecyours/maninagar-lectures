#include<iostream>
using namespace std;

void display(int n)
{
    if(n==0)
        return;
    cout<<"Hello World "<<n<<endl;
    display(n-1);
    cout<<"  Bye World "<<n<<endl;

}

int main()
{
    display(10);
    return 0;
}