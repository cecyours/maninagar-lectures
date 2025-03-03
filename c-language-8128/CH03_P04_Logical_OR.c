#include<stdio.h>
void main()
{
    int start,end;
    int n1,n2;
    int i;
    printf("Enter start-end : ");
    scanf("%d-%d",&start,&end);

    printf("Enter number1,number2 : ");
    scanf("%d,%d",&n1,&n2);

    printf("%2s | %2s \n","Sr","N");
    for(i=start;i<=end;i++)
    {
        printf("%2d ",i);
        if(i%n1==0 || i%n2==0)
        {
             printf("| %2d ",i); 
        }
        printf("\n");
    }
    
}