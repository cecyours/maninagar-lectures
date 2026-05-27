#include<stdio.h>

void main(){
    int arr[115];
    int num, i;

    printf("Enter the size of array :");
    scanf("%d", &num);

    printf("Enter the data: \n");
    for ( i = 0; i < num; i++)
    {
        /* code */
        printf("Enter a[%d] = ", i);
        scanf("%d", &arr[i]);
    }
    
    printf("\n-----------------------------\n\n");

    for ( i = 0; i < num; i++)
    {
        /* code */
        printf("Data arr[%d] = %d\n",i,arr[i]);
    }
    
}