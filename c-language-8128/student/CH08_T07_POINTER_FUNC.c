#include<stdio.h>

int pointer_func(int *a,int *b)
{
    int sum = *a+*b;
    printf("sum of your numbers : %d",sum);
}
void main()
{
    int a,b;
    printf("Enter two numbers : ");
    scanf("%d,%d",&a,&b);

    pointer_func(&a,&b);
}