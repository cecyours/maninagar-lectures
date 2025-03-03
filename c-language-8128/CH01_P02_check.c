#include<stdio.h>
void main()
{
    int n;


    printf("Enter a number : ");
    scanf("%d",&n);


    if(n>0)
    {
        printf("%d is +ve",n);
    }
    else if(n==0)
    {
        printf("%d is zero",n);
    }
    else{
        printf("%d is -ve",n);
    }
}