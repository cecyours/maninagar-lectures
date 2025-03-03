#include<stdio.h>
void main()
{
    int a[100],n,i,search_number,f=0;

    printf("Enter the size: ");
    scanf("%d",&n);

    printf("enter the data: \n");

    for(i=0;i<n;i++)
    {
        printf("the data is a[%d]",i);
        scanf("%d",&a[i]);
    }

    printf("------------------------\n");
    printf("enter the search_number: ");
    scanf("%d",&search_number);
    for(i=0;i<n;i++)
    {
    if(search_number == a[i])
    {
        f = 1;
        printf("number is found %d at %d index",search_number,i);
    }
    }
    if(f==0)
    {
        printf("%d number is not found \n",search_number);
    }

    printf("------------------------\n");
    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }
}