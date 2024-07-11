#include<stdio.h>
void main()
{
    int n,i;

    printf("Enter the number : ");
    scanf("%d",&n);

    for(i=1;i<=n;i+=2)
    {
        printf("%d\n",i);
    }
}