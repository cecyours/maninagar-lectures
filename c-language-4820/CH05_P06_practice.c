#include<stdio.h>
void main()
{
    int a[100],n,i,search_number,f=0;

    printf("enter the size: ");
    scanf("%d",&n);

    printf("enter the data \n");

    for(i=0;i<n;i++)
    {
        printf("number is a[%d]",i);
        scanf("%d",&a[i]);
    }

    printf("---------------------\n");
    printf("Enter the search_number: ");
    scanf("%d",&search_number);

    for(i=0;i<n;i++)
    {
        if(search_number == a[i])
        {
            f = 1;
            printf("number is found %d at %d index. \n",search_number,i);
            // printf("yhr numbrt z; %d , %d",search_number,i);
        }
    }
    if (f==0)
    {
        printf("number not found %d");
    }

    printf("---------------------\n");
    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }
}