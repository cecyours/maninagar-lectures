#include <stdio.h>
void main()
{
    int a[100], sum = 0;
    int n, i;

    printf("Enter the number of elements : ");
    scanf("%d", &n);

    //
    printf("Enter the data : \n");
    for (i = 0; i < n; i++)
    {
        printf("Enter element for  a[%d] : ", i);
        scanf("%d", &a[i]);
    }

    printf("\n-----------------\n");

    for (i = 0; i < n; i++)
    {
        sum = sum + a[i];
    }

    printf("the total is : %d\n",sum);
    printf("the avg is : %f\n",sum/n);
}