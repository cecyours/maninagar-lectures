#include <stdio.h>

void main()
{
    int a, b;

    printf("Enter two number: ");
    scanf("%d,%d", &a, &b);

    if( a > b ) {
        printf("a is max %d ",a);
    }else {
        printf("b is max %d ",b);
    }
    
}