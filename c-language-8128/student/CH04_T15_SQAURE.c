#include<stdio.h>
void main()
{
    float i,t,r,n;
    
    printf("enter the number : ");
    scanf("%f",&t);
    r=1.5;
    for ( i = 1; i <= t; i++)
    {
        n=r;
        printf("%f\n",n);
        r=r+1.5;
    }
}