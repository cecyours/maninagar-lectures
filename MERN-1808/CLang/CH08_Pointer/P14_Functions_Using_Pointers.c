#include <stdio.h>

void printarray(int *arr, int size){
    for (int i = 0; i < size; i++)
    {
        printf("%d", *(arr + i));
    }
    
}


int main() {
    int number[5] = {10, 20, 30, 40, 50};

    printarray(number, 5); 
    
    return 0;
}