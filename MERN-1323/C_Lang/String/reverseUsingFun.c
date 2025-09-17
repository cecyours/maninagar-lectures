#include <stdio.h>
#include <string.h>

void main()
{
    char str[100];

    printf("Enter the string");
    scanf("%s", str);

    strrev(str);
    printf("Reverse the string %s", str);
}