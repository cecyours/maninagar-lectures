#include <stdio.h>
#include <string.h>
#include <stdbool.h>

void main()
{

    char str1[100], str2[100];
    bool status = true;

    printf("Please enter the first string :");
    scanf("%s", str1);

    printf("Please enter the second string :");
    scanf("%s", str2);

    if(strlen(str1) != strlen(str2))
    {
        printf("Both strings are unequal.");
    }

    for(int index = 0; index < strlen(str1); index++)
    {
        if(str1[index] != str2[index])
        {
            status = false;
            break;
        }
    }

    if(!status)
    {
        printf("Both strings are unequal.");
    }
    else
    {
        printf("Both strings are equal.");
    }

}