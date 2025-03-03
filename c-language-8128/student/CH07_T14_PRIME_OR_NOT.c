#include<stdio.h>
int prime(int n)
{
    int i,f=0;
        
        for ( i = 2; i <=n/2; i++)
        {
            if(n%i == 0){
                f=1;
                break;
            }
        }
            return !f;    
}

void main()
{
    int n,start,end;
    printf("Enter the number : ");
    scanf("%d",&n);

    if(prime(n))
    {
        printf("%d is a prime number ..",n);
    }
    else{
        printf("%d is not a prime number..",n);
    }

}