#include<stdio.h>
#include<stdlib.h>
void main()
{
    int *ptr;
    int n,i;


    printf("Enter the number of Elements ");
    scanf("%d",&n);

    ptr = (int *)calloc(n,sizeof(int));


    if(ptr==NULL)
    {
        printf("memory 404");
    }


    printf("Enter the data : \n");

    for(i=0;i<n;i++)
    {
        printf("Enter record : ");
        scanf("%d",&ptr[i]);
    }


    printf("\n----------\n");

    for(i=0;i<n;i++)
    {
        printf("%d => %d\n",i,ptr[i]);
    }
}