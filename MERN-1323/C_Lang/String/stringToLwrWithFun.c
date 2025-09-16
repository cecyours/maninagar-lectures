#include <stdio.h>
#include <string.h>

void main()
{
    char str[100];
    printf("Enter the String : ");
    scanf("%s", str);

    strlwr(str);

    printf("String in Lower case is %s", str);
}