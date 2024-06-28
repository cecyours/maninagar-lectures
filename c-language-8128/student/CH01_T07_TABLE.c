#include<stdio.h>
void main()
{
    int i,n,a,e;
    printf("enter the number : ");
    scanf("%d,%d",&a,&e);
    for(n=a; n<=e; n++)
    {
        for(i=1; i<=10; i++)
        {
            printf(" %d * %d = %d\n",n,i,n*i);
        }

        printf("----\n");
    }

    printf("END..");
    
}