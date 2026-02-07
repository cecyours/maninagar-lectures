#include <stdio.h>

void sum(int x, int y) // 2 parameters
{
    int z;
    z = x + y;
    printf("%d + %d = %d\n", x, y, z);
}
void main()
{
    int a, b;
    
    printf("Enter values as a+b : ");
    scanf("%d+%d", &a, &b);
    sum(a, b); // a → x, b → y when function executes
    /* a,b are arguments*/
    
}