#include<stdio.h>
#define MAX(X,Y) X>Y?X:Y

#define SUM(X,Y) X+Y 
void main()
{

    int a,b;
    printf("enter 2 numbers : ");
    scanf("%d,%d",&a,&b);


    printf("the max is %d\n",MAX(a,b));
    printf("the sum is %d\n",SUM(a,b));
}