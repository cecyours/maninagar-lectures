#include<stdio.h>

void main (){
    int a[100],n,temp,i,j;

    printf("enter the number :");
    scanf("%d", &n);
    printf("enter the data :");
    for ( i = 0; i < n; i++)
    {
     printf("enter a[%d] = ",i);
     scanf("%d" , &a[i]);
    }

    for ( i = 0; i < n; i++)
    {
        for ( j = i+1 ; j < n; j++)
        {
            if (a[i] > a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    printf("\n sort array :\n");
    for ( i = 0; i < n; i++)
    {
       printf("a [%d] = %d \n", i, a[i]);
    }
    
    
}