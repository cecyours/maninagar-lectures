#include<stdio.h>
#include<string.h>
void main()
{
    char name[10];
    int i,counter;
    
    printf("enter the name : ");
    scanf("%s",&name);
    
    for ( i = 0; name[i]; i++)
    {
        printf("%c\n",name[i]);
    }

}