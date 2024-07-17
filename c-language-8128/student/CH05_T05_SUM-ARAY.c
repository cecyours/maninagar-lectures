#include <stdio.h>
void main()
{
    int i, n, a[100], sum=0;

    printf("enter the size of array : ");
    scanf("%d", &n);

    printf("enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("enter value %d of index : ",i);
        scanf("%d",&a[i]);
    }

    
    
    for ( i = 0; i < n; i++)
    {
        printf("%d ",sum);
        sum=sum+a[i];
        printf("+ %d => %d\n",a[i],sum);
    }

    printf("sum of array elemnts is : %d",sum);

       
}