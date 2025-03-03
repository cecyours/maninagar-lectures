#include<stdio.h>
void main()
{
    int a[100],digits=0;
    int n,i;

    printf("Enter the number : ");
    scanf("%d",&n);

    i = 0;
    while(n>0)
    {
        a[i] = n%2;
        n = n/2;
        digits++;
        i++;
    }


    for(i=digits-1;i>=0;i--)
    {
        printf("%d",a[i]);
    }
}