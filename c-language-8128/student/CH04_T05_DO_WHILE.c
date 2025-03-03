#include<stdio.h>
void main()
{
    int n,sum=0;

    do
    {
        printf("enter the number : ");
        scanf("%d",&n);

        sum +=n;

        printf("%2d => %2d\n",n,sum);



    } while (sum<=100);
    
}