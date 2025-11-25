#include <iostream>
#include <string>
using namespace std;

int main()
{
    string message = "Hi";
    cout << "Initial capacity: " << message.capacity() << endl;
    
    message.append(" there, how are you?");
    cout << "After appending, capacity: " << message.capacity() << endl;
    
    return 0;
}
