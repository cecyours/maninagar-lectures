#include<stdio.h>
int main()
{
    char name[100];

    printf("Enter the name : ");
    scanf("%s",name);
    // gets(name);

    printf("welcome %s\n",name);
}