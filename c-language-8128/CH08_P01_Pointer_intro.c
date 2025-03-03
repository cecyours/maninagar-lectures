#include<stdio.h>
void main()
{
    int a=10;
    int *ptr = &a;

    // ptr = &a;

    *ptr = 20;

    printf("the addres of a : %p, %u with value %d\n",&a,&a,a);
    printf("the addres of a : %p, %u with value %d\n",ptr,ptr,*ptr);
}