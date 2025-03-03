#include<stdio.h>
void main()
{
    int n1,n2;
    int start, end;
    int i;

    printf("enter starting-ending : ");
    scanf("%d-%d",&start,&end);

    printf("enter two numbers : ");
    scanf("%d,%d",&n1,&n2);

    printf("SR | N |\n");

    printf("----------\n");

    for(i=start; i<=end; i++)
    {
        printf("%2d |",i);
        if (i%n1==0 || i%n2==0)
        {
            printf("%2d |",i);
        }
        printf("\n");
    }


}