
#include<stdio.h>
void main()
{
    int start,end;

    printf("Enter the start - end : ");
    scanf("%d-%d",&start,&end);
    
    for(;start<=end;start++)
    {
        printf("the value %d\n",start);
    }

}