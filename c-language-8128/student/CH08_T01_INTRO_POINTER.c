#include<stdio.h>
void main()
{
    int a=10;

    int *ptr =&a;

    printf("the value of a at address %p : %d\n",&a,a);
    printf("the value of a at address %p : %d",ptr,*ptr);
}