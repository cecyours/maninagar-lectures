#include <iostream>
using namespace std;

int main() {
    int row = 2, col = 3;
    int arr[row][col];

    cout << "Enter 2x3 matrix elements:\n";
    for(int i=0; i<row; i++)
        for(int j=0; j<col; j++)
            cin >> arr[i][j];

    // Sorting each row
    for(int i=0; i<row; i++) {
        for(int k=0; k<col-1; k++) {
            for(int j=0; j<col-k-1; j++) {
                if(arr[i][j] > arr[i][j+1]) {
                    int temp = arr[i][j];
                    arr[i][j] = arr[i][j+1];
                    arr[i][j+1] = temp;
                }
            }
        }
    }

    cout << "\nSorted 2D Array (row-wise):\n";
    for(int i=0; i<row; i++) {
        for(int j=0; j<col; j++)
            cout << arr[i][j] << " ";
        cout << endl;
    }

    return 0;
}
