#include<stdio.h>
void swap(int *a,int *b)
{
    *a=*a+*b;
    *b=*a-*b;
    *a=*a-*b;
}

void main()
{
    int a,b;

    printf("enter two numbers : ");
    scanf("%d,%d",&a,&b);


    printf("before function call a : %d\n",a);
    printf("before function call b : %d\n",b);

    swap(&a,&b);

    printf("after function call a : %d\n",a);
    printf("after function call b : %d\n",b);
}