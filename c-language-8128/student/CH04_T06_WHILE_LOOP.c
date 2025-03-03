#include<stdio.h>
void main()
{
    int sum=0;
    int n,rem;

    printf("enter the number : ");
    scanf("%d",&n);

    while (n>0)
    {
        rem = n%10;
        printf("remainder is : %d\n",rem);
        sum +=rem;

        n/=10;
    
    }
    
    printf("final sum : %d\n",sum);
}