#include<stdio.h>
#include<stdlib.h>
void main()
{
    int *ptr;
    int n, i;

    printf("Enter your element:- ");
    scanf("%d",&n);

    ptr = (int *)malloc(sizeof(int)*n);

    if (ptr==NULL)
    {
        printf("Memory 404");
    }

    printf("Enter the data: \n");

    for(i=0;i<n;i++)
    {
        printf("Enter record: ");
        scanf("%d",&ptr[i]);
    }

    printf("----------------------\n");

    for(i=o;i<n;i++)
    {
        printf("%d => %d\n",i,ptr[i]);
    }
}