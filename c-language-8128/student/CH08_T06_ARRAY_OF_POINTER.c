#include<stdio.h>
#include<stdlib.h>
void main()
{
    char *name[100];
    int i,n;

    printf("enter  the size of array : ");
    scanf("%d",&n);

    printf("enter the array : \n");

    for ( i = 0; i < n; i++)
    {
        name[i]= calloc(100, sizeof(char));
        printf("enter the name  : ");
        scanf("%s",name[i]);
    }
    
    printf("--------------------------\n");

    for ( i = 0; i < n; i++)
    {
        printf("entered names : %s\n",name[i]);
    }
    

}