#include <stdio.h>
int main() {

    int arr[5] = {2, 4, 6, 8, 10};
    int *p = arr;
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += *(p + i);
    }

    printf("Sum of array: %d\n", sum);

    return 0;
}