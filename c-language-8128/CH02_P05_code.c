#include<stdio.h>
#include "CH02_P05_code.h"

void main()
{
    int a,b;
    printf("enter any two numbers : ");
    scanf("%d,%d",&a,&b);



    printf("minimum value is : %d\n",min(a,b));
    printf("maximum value is : %d",max(a,b));
    
}