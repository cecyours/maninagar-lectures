#include<stdio.h>
void main()
{
    int a,b,max;

    printf("enter two numbres : ");
    scanf("%d,%d",&a,&b);
    max = (a>b)?a:b;

    printf("maximum number is : %d",max);

}