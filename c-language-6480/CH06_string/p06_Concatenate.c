#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100], str2[50];
    printf("Enter string 1 :");
    scanf("%s", str1);

    printf("Enter string 2 :");
    scanf("%s", str2);

    strcat(str1, " ");
    strcat(str1, str2);

    printf("Final string is : %s", str1);
}