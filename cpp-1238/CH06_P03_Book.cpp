#include <iostream>
using namespace std;

class Book
{

    // data => variables : private

    string bookName;

public:
// method => public
    void setBookName(string x)
    {
        bookName = x;
    }

    string getBookName()
    {
        return bookName;
    }
};

int main()
{
    Book b;
    b.setBookName("Python");

    cout << "Book name " << b.getBookName();
    return 0;
}