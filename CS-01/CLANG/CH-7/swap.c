#include <stdio.h>

void swap(int *a, int *b)
{
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}

int main()
{
    int a, b;
    printf("Enter The value : ");
    scanf("%d,%d", &a, &b);
    printf("a : %d\tb : %d\n", a, b);
    swap(&a, &b);
    printf("a : %d\tb : %d\n", a, b);
    return 0;
}
