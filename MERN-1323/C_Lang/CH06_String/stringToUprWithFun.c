#include <stdio.h>
#include <string.h>

void main()
{
    char str[100];
    printf("Please enter a string : ");
    scanf("%s", str);

    strupr(str);
    printf("The final string is : %s", str);
}