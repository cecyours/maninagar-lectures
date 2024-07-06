#include <stdio.h>

void main()
{
    int n;
    int f = 0;
    int i;

    printf("Enter the number : ");
    scanf("%d",&n);
    for(i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
            f = 1;
            break;
        }
    }

    if(!f)
    {
        printf("%d is prime",n);
    }
    else{
        printf("%d is not prime",n);
    }
}