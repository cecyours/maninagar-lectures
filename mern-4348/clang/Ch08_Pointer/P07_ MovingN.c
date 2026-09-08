#include <stdio.h>
int main() {
    int arr[5] = {100, 200, 300, 400, 500};
    int *p = arr;  
    
    printf("Original value: %d\n", *p);
    
    p += 3;  
    printf("After moving 3 steps: %d\n", *p);
    
    p -= 2;
    printf("After moving 2 steps back: %d\n", *p);
    
    return 0;
}