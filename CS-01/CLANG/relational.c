#include <stdio.h>
int main()
{
    int a, b;
    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);
    printf("%d > %d : %d\n", a, b, a > b);   // greater than
    printf("%d < %d : %d\n", a, b, a < b);   // less than
    printf("%d >= %d : %d\n", a, b, a >= b); // greater than or equals to
    printf("%d <= %d : %d\n", a, b, a <= b); // less than or equals to
    printf("%d != %d : %d\n", a, b, a != b); // not equals to
    printf("%d == %d : %d\n", a, b, a == b); // equals to
    return 0;
}