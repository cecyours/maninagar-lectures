#include<stdio.h>
#include<time.h>
void main()
{
    char pass[100] = "qwertyuiopasdfghjklzxcvbnm1234567890";

    int i,n,k;
    
    printf("enter number of characters : ");
    scanf("%d",&n);

    srand(time(NULL));
    
    for ( i = 0; i < n; i++)
    {
        printf("%c",pass[rand()%36]);
    }
    
}
