#include <iostream> // Include input-output stream library

using namespace std; // Use standard namespace

int add(int a, int b)
{
    return a + b;
}

int main()
{

    int x, y;
    cout << "Enter The Number One:  ";
    cin >> x;

    cout << "Enter The Number Two:  ";
    cin >> y;

    int sum = add(x, y);

    cout << "The sum of " << x << " And " << y << " is " << sum << endl;

    return 0; // Exit program
}

// g++ first.c  -o  ./app/first.exe  ; ./app/fist.exe