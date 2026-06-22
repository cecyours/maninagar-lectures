#include <stdio.h>
#include <string.h>

void main()
{

    char str[100];

    printf("Please enter the string :");
    scanf("%s", str);

    int len = strlen(str);

    printf("String length is : %d", len);
}