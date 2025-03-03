#include <stdio.h>
void main()
{
    int a, b, c;
    int *pa, *pb, *pc;

    pa=&a;
    pb=&b;
    pc=&c;

    printf("enter two numbers : ");
    scanf("%d,%d", &a, &b);

    *pc = *pa + *pb;

    printf("Sum of your numbers : %d",c);
}