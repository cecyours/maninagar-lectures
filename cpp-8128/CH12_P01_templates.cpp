#include<iostream>
using namespace std;
template <typename tx>
tx maxi(tx a,tx b)
{
    if(a>b)
    {
        return a;
    }
    return b;
}

int main()
{


    cout<<"find max int "<<maxi<int>(2,4)<<endl;
    cout<<"find max int "<<maxi<float>(2.3,4.2)<<endl;
    cout<<"find max int "<<maxi<float>(2.2,4.5)<<endl;

}