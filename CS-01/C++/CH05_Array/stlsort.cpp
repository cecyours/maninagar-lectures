#include <iostream>
#include <algorithm> 
using namespace std;

int main() {
    int arr[5] = {4, 2, 5, 1, 3};
    sort(arr, arr + 5); // arr+5 means till end
    
    cout << "Sorted Array: ";
    
    for(int i = 0; i < 5; i++)
        cout << arr[i] << " ";
    return 0;
}
