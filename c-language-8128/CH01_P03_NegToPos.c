#include<stdio.h>
void main()
{
    int n;
    printf("Enter a number : ");
    scanf("%d",&n);

    if(n<0)
    {
        n = n*-1;
    }


    printf("your new number %d\n",n);
}