#include <stdio.h>

int main()
{
    char c[3] = {'A', 'B', 'C'};
    char *cp = c;
    printf("%c %c %c\n", *cp, *(cp + 1), *(cp + 2)); // A B C

    double d[2] = {1.1, 2.2};
    double *dp = d;
    printf("%.1f %.1f\n", *dp, *(dp + 1)); // 1.1 2.2

    int arr[5] = {10, 20, 30, 40, 50};  
    int *p1 = &arr[4]; // points to 50
    int *p2 = &arr[1]; // points to 20
    printf("Difference: %ld\n", p1 - p2);

    return 0;
}