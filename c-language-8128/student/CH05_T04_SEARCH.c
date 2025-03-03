#include <stdio.h>
void main()
{
    int i, n, a[100], data,f=0;

    printf("enter the size of array : ");
    scanf("%d", &n);

    printf("enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("enter value %d of index : ",i);
        scanf("%d",&a[i]);
    }

    printf("enter value that you want : ");
    scanf("%d",&data);
    
    for ( i = 0; i < n; i++)
    {
        printf("value of a[%d] =>  %d\n",i,a[i]);
    }


    for ( i = 0; i < n; i++)
    {
        if (data==a[i])
        {
            printf("value of %d is found at index %d..\n",data,i);
            f=1;
        } 
    }
    
    if(!f){
        printf("value of %d is not found at any index...\n",data);
    }
       
}