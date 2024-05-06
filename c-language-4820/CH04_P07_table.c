
#include<stdio.h>
void main()
{

    int n,i;

    printf("Enter the number : ");
    scanf("%d",&n);

    for(i=1;i<=10;i++)
    {
            printf("%2d x %2d = %2d\n",n,i,n*i);
    }
}