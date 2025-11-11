#include <iostream>
using namespace std;

void addMarks(int *marks)
{
    *marks += 10;
    cout << "Inside function: marks = " << *marks << endl;
}

int main()
{
    int studentMarks = 75;
    addMarks(&studentMarks);
    cout << "Updated Marks: " << studentMarks << endl;
    return 0;
}