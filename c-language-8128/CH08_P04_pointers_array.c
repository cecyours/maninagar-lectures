#include<stdio.h>
void main()
{
    int a[100],i,n,*ptr;

    // ptr = a;
    ptr = &a[0];
    printf("Enter the number of data : ");
    scanf("%d",&n);

    printf("Ente those data : \n");

    for(i=0;i<n;i++)
    {
        printf("Enter data for a[%d] : ",i);
        scanf("%d",ptr+i);
        // scanf("%d",&a[i]);
    }

    printf(" ---------------\n");

    for(i=0;i<n;i++)
    {
        printf("Elements a[%d] => %d, %d\n",i,a[i],*(ptr+i));
    }
}