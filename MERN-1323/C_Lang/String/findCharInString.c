#include <stdio.h>
#include <string.h>

void main()
{
    char str[100], ch = 'a';
    printf("Enter the string :");
    scanf("%s", str);

    char* pos = strchr(str, ch);
    if(pos)
    {
        printf("Char found at position %p", pos);
    }
    else
    {
        printf("Char not found in string");
    }
}