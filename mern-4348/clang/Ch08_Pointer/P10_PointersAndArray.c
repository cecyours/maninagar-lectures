#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    int *p = arr; // arr acts as pointer to first element
    
    printf("Address of first element: %p\n", arr);
    printf("Address stored in pointer p: %p\n", p);
    printf("First element using pointer: %d\n", *p);

    return 0;
}