#include <stdio.h>
#include <string.h>

void main()
{

    char str1[100], str2[100];

    printf("Please enter the first string :");
    scanf("%s", str1);

    printf("Please enter the second string :");
    scanf("%s", str2);

    int status = strcmp(str1, str2);

    if(!status)
    {
        printf("Both strings are same.");
    }
    else
    {
        printf("Both strings are un-equal.");
    }
}