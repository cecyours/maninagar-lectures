#include<stdio.h>
void main()
{
    int start,end,n;

    printf("Enter the number start-end : ");
    scanf("%d,%d",&start,&end);

    n = end;

    while(n>=start)
    {
        printf("%d, ",n);
        n--;
    }
}