
#include <stdio.h>
#include "CH02_P07_header.h"

int main()
{
    int x,y;

    printf("Enter the 2 numbers : ");
    scanf("%d,%d",&x,&y);

    printf("%d + %d = %d\n",x,y,sum(x,y));
}