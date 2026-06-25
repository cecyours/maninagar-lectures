#include <stdio.h>
 int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr + 4;  
    
    printf("Array in reverse:\n");
    
    for (int i = 0; i < 5; i++) {
        printf("%d ", *p);
        p--; 
    }
    
    return 0;
 }
