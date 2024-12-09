#include <iostream>
#include <exception>
using namespace std;

class MyException: public exception{
    const char *s;
    public:
    MyException(const char *s)
    {
        this->s = s;
    }

     const char * what () const throw () {
      return s;
   }
};
int main()
{
    int a, b, c;

    cout << "Enter 3 numbers : ";
    cin >> a >> b >> c;

    try
    {

        if (a > b)
        {
            try
            {

                if (a > c)
                {
                    cout << " a is max " << endl;
                }
                else
                {

                    throw 1;
                }
            }
            catch (int i)
            {
                cout << " error code : " << i << endl;
            }
        }
        else{
            throw MyException("kites !!");
        }
    }
    catch (exception &e)
    {
        cout<<"new exception : "<<e.what()<<endl;
    }
}