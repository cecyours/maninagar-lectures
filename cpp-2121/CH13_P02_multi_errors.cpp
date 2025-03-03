#include <iostream>
using namespace std;

int main()
{
    int id = -1;
    try
    {

        if (id == -1)
        {
            try{
                throw exception();
            }
            catch(...)
            {
                cout<<"nested error occured";
            }
        }
        else if (id == 0)
        {
            throw runtime_error("No need of you");
        }
        else
        {
            throw exception();
        }
    }
    catch (logic_error &e)
    {
        cout << e.what() << endl;
    }
    catch (runtime_error &e)
    {
        cout << e.what() << endl;
    }
    catch (...)
    {
        cout << "random error" << endl;
    }

    cout << "hello world" << endl;
}