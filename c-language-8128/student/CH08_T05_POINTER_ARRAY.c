#include<stdio.h>
void main()
{
    int n,i,a[100],*ptr;

    ptr = &a[0];

    printf("enter the size of array  : ");
    scanf("%d",&n);

    printf("enter the array  values : \n");

    for ( i = 0; i < n; i++)
    {
        printf("enter the value of a at %d index  : ",i);
        scanf("%d",ptr+i);
    }

    printf("----------------------------------\n");

    for ( i = 0; i < n; i++)
    {
        printf("value of a at %d index : %d ==> %d\n",i,a[i],*(ptr+i));
    }
    
    
}