#include<stdio.h>
void main()
{
    int m,n;
    printf("enter two number : ");
    scanf("%d,%d" , &m,&n);

    if (m>n)
    {
        printf("%d is greater than %d..", m , n);
    }
    else if(m==n)
    {
        printf("both are same..");
    }
    else
    {
        printf("%d is less than %d..", m,n);
    }
    
}

