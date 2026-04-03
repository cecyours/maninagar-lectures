#include <stdio.h>

#define A 1000
#define SUM(X,Y) X + Y

int i = 30;

void display()
{
    printf("Hello\n");
}

void main()
{
    printf("Hey!\n");
    printf("Sum %d, %d is %d\n", A, i, SUM(A,i));
    display();
}