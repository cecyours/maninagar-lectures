#include<stdio.h>

void main(){
    float a[100], sum=0, avg;
    int i, n;

    printf("Enter the size of array: ");
    scanf("%d", &n);

    printf("Enter the data: \n");
    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("Enter a[%d] = ", i);
        scanf("%f", &a[i]);
        sum = sum+a[i];
    }
    avg = sum/n;
    

    printf("\nThe array: \n");

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("Data a[%d] = %.2f\n", i, a[i]);
    }
    
    printf("\n sum: %.2f", sum);
    printf("\n avg: %.2f\n", avg);
}