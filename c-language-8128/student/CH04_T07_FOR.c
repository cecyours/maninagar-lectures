#include<stdio.h>
void main()
{
    int i;
    int start,end;

    printf("enter the start-end : ");
    scanf("%d-%d",&start,&end);


    for ( i = start; i <= end; i++)
    {
        printf("cube of %d : %d\n",start,start*start);
        start++;
    }
       
}