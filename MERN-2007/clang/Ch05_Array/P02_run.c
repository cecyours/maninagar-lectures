#include<stdio.h>

void main() {

    int a[125], num;

    printf("Enter arry size:");
    scanf("%d", &num);

    printf("Enter the data: \n");
    for (int i = 0; i < num; i++)
    {
        /* code */
        printf("Enter a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    printf("\n---------------------\n\n");

    for (int i = 0; i < num; i++)
    {
        /* code */
        printf("a[%d] = %d\n", i, a[i]);
    }
    
    

}