#include <stdio.h>

int main()
{
    int a, b, min;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    min = (a < b) ? a : b; 

    printf("The MIN is %d", min);
    return 0;
}
