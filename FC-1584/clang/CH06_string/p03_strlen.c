#include <stdio.h>
#include <string.h>

void main()
{
    char name[100];
    int len;
   
    printf("Enter name : ");
    scanf("%s", name);

    len = strlen(name);

    printf("length of %s is %d.\n", name, len);
}