#include<stdio.h>
void main()
{
    int i,j,a,e;
    printf("enter two number : ");
    scanf("%d,%d", &e,&j);


    for (a=1; a<=10; a++)
    {
        
        for ( i = e; i <= j; i++)
        {
            printf("%d * %d = %d\t",i,a,i*a);
               
        }
        printf("\n");
    }

}