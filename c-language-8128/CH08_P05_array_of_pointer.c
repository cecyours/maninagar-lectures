#include<stdio.h>
#include<stdlib.h>
void main()
{
    char *name[100];
    int i,n;
    
    printf("Enter the size of array : ");
    scanf("%d",&n);


    printf("Enter your list : \n");

    for(i=0;i<n;i++)
    {
        name[i] = calloc(100,sizeof(char));
        printf("Enter name : ");
        scanf("%s",name[i]);
    }

    printf("-----------\n");

    for(i=0;i<n;i++)
    {
        printf("%s\n",name[i]);
    }
}