#include<stdio.h>
#include <stdlib.h>

void main(){
    int *ptr, n, i, new_size;
    char choice;

    printf("Enter the Size:");
    scanf("%d", &n);
    
    ptr = calloc(n, sizeof(int));

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("Enter data %d: ", i+1);
        scanf("%d", (ptr + i));
    }

    printf("---------------\n");

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("%d\n", *(ptr + i));
    }

    printf("Do you want to add new elements [y/n]: ");
    scanf("%c", &choice);
    scanf("%c", &choice);

    if (choice != 'y' && choice != 'Y'){
        printf("Thank you!\n");
        exit(0);
    }
    
    printf("Enter the new size of new elements: ");
    scanf("%d", &new_size);

  
    for ( i = n; i < n + new_size; i++)
    {
        /* code */
        printf("Enter data for %d:", i+1);
        scanf("%d", (ptr + i));
    }
    
    printf("-------------------------\n");

    for ( i = 0; i < n + new_size; i++)
    {
        /* code */
        printf("%d\n", *(ptr + i));
    }

    free(ptr);

    printf("--------------------------\n");
    for ( i = 0; i < n + new_size; i++)
    {
        /* code */
        printf("%d\n", *(ptr + i));
    }
    

}