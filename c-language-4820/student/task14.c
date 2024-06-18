#include<stdio.h>
void main()
{
    int a, b, c;

    int *ptr_a, *ptr_b, *ptr_c;

    ptr_a = &a;
    ptr_b = &b;
    ptr_c = &c;

    printf("Enter the number:- ");
    scanf("%d, %d", ptr_a,ptr_b);

    *ptr_c = *ptr_a + *ptr_b;
     printf("%d + %d = %d\n",a,b,c);

    *ptr_c = *ptr_a - *ptr_b;
    printf("%d - %d = %d\n",a,b,c);

    *ptr_c = *ptr_a * *ptr_b;
    printf("%d * %d = %d\n",a,b,c);

    *ptr_c = *ptr_a / *ptr_b;
    printf("%d / %d = %d\n",a,b,c);
}