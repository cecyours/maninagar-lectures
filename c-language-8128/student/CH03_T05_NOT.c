#include<stdio.h>
void main()
{
    int n;
    int i;
    int start,end;
    int f= 0;

    printf("enter starting-ending : ");
    scanf("%d-%d",&start,&end);

    for(n=start; n<=end; n++)
    {
        f=0;
        for ( i = 2; i <=n/2; i++)
        {
            if(n%i == 0){
                f=1;
                break;
            }
        }
        if(!f)
        {
            printf("%d is a prime number..\n", n);

        }
        else
        {
            printf("%d is not a prime number..\n", n);
        }

          
    }
    
}