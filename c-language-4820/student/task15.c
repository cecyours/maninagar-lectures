#include<stdio.h>
void main()
{
    int a=10,b=20,c=30;

    int*ptr;

    printf("The value of a:%d at %p, %llu\n",a,&a,&a);
    printf("The value of b:%d at %p, %llu\n",b,&b,&b);
    printf("The value of c:%d at %p, %llu\n",c,&c,&c);

    printf("---------------------------\n");

    ptr = &a;

    printf("the address %llu, having %d\n",ptr,*ptr);

    ptr--;
    printf("the address %llu, having %d\n",ptr,*ptr);

    ptr++;
    printf("the address %llu, having %d\n",ptr,*ptr);
}