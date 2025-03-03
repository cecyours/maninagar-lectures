#include<stdio.h>

void swap(int *a, int *b)
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
    
    printf("before swap a : %2d\n",a);
    printf("before swap b : %2d\n",b);

    swap(&a,&b);

    printf(" after swap a : %2d\n",a);
    printf(" after swap b : %2d\n",b);

}