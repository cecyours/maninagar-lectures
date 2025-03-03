#include<stdio.h>
void main()
{
    char name[10][30];

    int n,i;

    printf("Enter no. of student : ");
    scanf("%d",&n);

    printf("Enter those names : \n");

    for(i=0;i<n;i++)
    {
        printf("Enter name : ");
        scanf("%s",name[i]);
    }
    

    printf("---record---\n");

    for(i=0;i<n;i++)
    {
        printf("welcome %s\n",name[i]);
    }
}