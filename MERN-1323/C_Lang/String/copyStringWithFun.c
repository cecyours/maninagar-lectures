#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100], str2[100];

    printf("Please enter a string : ");
    scanf("%s", str1);

    strcpy(str2, str1);

    printf("The string 2 is : %s", str2);
}