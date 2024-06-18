#include <stdio.h>
void main()
{

    int a, b, c;

    int *ptr_a, *ptr_b, *ptr_c;

    ptr_a= &a;
    ptr_b = &b;
    ptr_c = &c;

    printf("Enter the numbers : ");
    scanf("%d,%d",ptr_a,ptr_b);


    *ptr_c = *ptr_a + *ptr_b;

    // printf("a : %d\n",a);
    // printf("b : %d\n",b);
    // printf("c : %d\n",c);

    printf("%d + %d = %d\n",a,b,c);

}