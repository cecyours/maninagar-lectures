#include<stdio.h>
#include "CH12_P02_header.c"

void main()
{
    int x,y;
    printf("enter 2 numbers : ");
    scanf("%d,%d",&x,&y);

    printf("%d + %d = %d\n",x,y,sum(x,y));
}