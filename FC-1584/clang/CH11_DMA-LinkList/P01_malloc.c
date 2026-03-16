#include<stdio.h>
#include <stdlib.h>

void main(){
    int *ptr, n, i;

    printf("Enter the Size:");
    scanf("%d", &n);

    printf("Enter %d elements: \n", n);
    
    ptr = malloc(n * sizeof(int));

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("Enter data %d: ", i);
        scanf("%d", (ptr + i));
    }

    printf("The elements are: \n");

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("%d\n", *(ptr + i));
    }


}