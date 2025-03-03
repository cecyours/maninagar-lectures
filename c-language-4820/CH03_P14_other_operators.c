
#include<stdio.h>
void main()
{

    int a;

    int *ptr; //pointer
    printf("Enter the data : ");
    scanf("%d",&a);

    ptr = &a;

    printf("you entered the value at %p\n",&a);

    printf("--------using pointer-----------\n");
    printf("the address : %p the value %d\n",ptr,*ptr);
    a =29;
    printf("the address : %p the value %d\n",ptr,*ptr);

}