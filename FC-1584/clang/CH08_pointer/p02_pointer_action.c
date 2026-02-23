#include <stdio.h>

int main()
{
    int a;
    
    printf("Enter value of a: ");
    scanf("%d", &a);   // run time input

    int *ptr = &a;     // pointer initialization

    printf("Value of a: %d\n", a);
    printf("Address of a: %p\n", &a);
    printf("Value using pointer: %d\n", *ptr);

    *ptr = 100;   // change value using pointer

    printf("Updated value of a: %d\n", a);

    return 0;
}
