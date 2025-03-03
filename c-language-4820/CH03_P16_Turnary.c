#include<stdio.h>

void main()
{
    int a,b,max,min;

    printf("Enter 2 numbers : ");
    scanf("%d,%d",&a,&b);


    max = (a>b)?a:b;
    min = (a<b)?a:b;

    // (condition)?express1:express2


    printf("%d is max \n",max);
    printf("%d is min \n",min);


}
