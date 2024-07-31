#include<stdio.h>
void main()

{
    int p,r,t,si;
    int *ptr;

    printf("enter principle amount, interest rate and time(in y) : ");
    scanf("%d,%d,%d",&p,&r,&t);

    ptr = &si;

    *ptr = (p*r*t)/100;

    printf("Simple interest will be : %d\n",*ptr);

    *ptr = *ptr+ p;

    printf("total amount to be paid : %d\n",*ptr);

    printf("%p\n",ptr);
    printf("%p",&si);
    
}