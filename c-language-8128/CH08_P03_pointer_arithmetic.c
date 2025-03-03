#include <stdio.h>
void main()
{
    int a, b, c;
    int *pa, *pb, *pc;

    pa = &a;
    pb = &b;
    pc = &c;

    printf("Enter value of a, b : ");
    scanf("%d,%d", &a, &b);

    *pc = *pa + *pb;

    printf("%d + %d = %d\n", a, b, c);
}