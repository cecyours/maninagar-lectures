#include <stdio.h>

void main()
{

    char str[100];
    int len = 0;

    printf("Please enter the string :");
    scanf("%s", str);

    for(int index = 0; str[index] != '\0'; index++)
    {
        len++;
    }

    printf("Length of string is : %d", len);
}
