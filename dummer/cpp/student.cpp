
#include<iostream>

using namespace std;

class Student{

    private:
        int id;

    public:
        void setId(int tempId){ //setter
            
            if(tempId<0)
            {
                cerr<<"Please provide valid value (+ve)"<<tempId<<endl;
                exit(1);
            }
            id=tempId;
        }

        int getId() // getter
        {
            return id;
        }

};
int main()
{
    Student s1,s2;
    int tempId;
    cout<<"Enter the id to store : ";
    cin>>tempId;

    s1.setId(tempId);

    cout<<"Id 1 :  "<<s1.getId()<<endl;

     cout<<"Enter the id to store : ";
    cin>>tempId;
    s2.setId(tempId);

    cout<<"Id 2 :  "<<s1.getId()<<endl;

    
}
