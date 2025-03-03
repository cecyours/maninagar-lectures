#include <iostream>
using namespace std;

struct Book{
     int bookId;
     string bookName;
     double bookPrice;
};
int main()
{
    struct Book books[100];
    int i,n;

    cout<<"Enter size of array : ";
    cin>>n;

    cout<<"Enter the array : "<<endl;
    for(i=0;i<n;i++)
    {
        cout<<"Enter book Id : ";
        cin>>books[i].bookId;


        cout<<"Enter book Name : ";
        cin>>books[i].bookName;


        cout<<"Enter book Price : ";
        cin>>books[i].bookPrice;
    }

    cout<<" ================ ====\n";
        cout<<"Id"<<"\t"<<"Name"<<"\t"<<"Price"<<endl;

    for(i=0;i<n;i++)
    {
        cout<<books[i].bookId<<"\t"<<books[i].bookName<<"\t"<<books[i].bookPrice<<endl;
    }
    return 0;
}