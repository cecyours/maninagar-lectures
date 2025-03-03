#include<stdio.h>
void main()
{
    float arr[100],average=0,sum=0;
    int n,i;


    printf("enter the number : ");
    scanf("%d",&n);

    printf("enter data  : \n");

    for ( i = 0; i < n; i++)
    {
        printf("enter the value for %d index : ",i);
        scanf("%f",&arr[i]);

        
        sum = sum+arr[i];
    }
    average = sum/n;

    printf("Average value is : %.2f\n",average);
}