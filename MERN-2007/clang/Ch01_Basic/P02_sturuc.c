#include <stdio.h>

#define A 100
#define SUM(x, y) x + y
int i = 30;
void display()
{
    printf("Hello Friend !!!\n");
}
void main() // main section
{
    
    printf("Hello World\n");
    printf("sum of %d,%d is %d\n", A, i, SUM(A, i));
    display();
    
}