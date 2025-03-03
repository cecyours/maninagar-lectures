#include<stdio.h>
void main()
{
    int n,i,start,end,rev=0,rem;

    printf("enter the start-end : ");
    scanf("%d-%d",&start,&end);

    for ( i = start; i <= end; i++)
    {
        n=i;
        rev= 0;

        while (n>0)
        {
            rem =n%10;
            rev = rev*10 + rem;
            n = n/10;

        }

        if (i==rev)
        {
            printf("%d => %d\n",i,rev);
        }
        
        
    }
    
}