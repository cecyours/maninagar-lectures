#include<stdio.h>
#include<stdlib.h>
void  main()
{
    int *ptr, a, i;

    printf("Enter the size of array : ");
    scanf("%d",&a);

    printf("Enter the array : \n");

    ptr = malloc(a * sizeof(int));

    for ( i = 0; i < a; i++)
    {
        /* code */
        printf("Enter the number %d : ",i+1);
        scanf("%d",(ptr + i));
    }
    
    printf("--------------------------\n");

    for ( i = 0; i < a; i++)
    {
        /* code */
        printf("%d\n",*(ptr+i));
    }
    
}