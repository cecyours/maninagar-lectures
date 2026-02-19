#include<stdio.h>

void main(){
    int a[100];
    int i, n;

    printf("Enter the size of array: ");
    scanf("%d", &n);

    printf("Enter the data: \n");
    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("Enter a[%d] = ", i);
        scanf("%d", &a[i]);
    }
    

    printf("\n------------------\n\n\n");

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("Data a[%d] = %d\n", i, a[i]);
    }
    
}