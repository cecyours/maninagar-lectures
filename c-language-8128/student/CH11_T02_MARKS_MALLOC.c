#include<stdio.h>
#include<stdlib.h>
void  main()
{
    int *ptr, a, i;

    printf("Enter the number of data you want to enter : ");
    scanf("%d",&a);

    printf("Enter the data : \n");

    ptr = malloc(a * sizeof(int));

    for ( i = 0; i < a; i++)
    {
        /* code */
        printf("Enter Marks of %d : ",i+1);
        scanf("%d",(ptr + i));
    }
    
    printf("--------------------------\n");

    for ( i = 0; i < a; i++)
    {
        /* code */
        printf("Marks of %d => %d\n",i+1,*(ptr+i));
        
    }
    
}