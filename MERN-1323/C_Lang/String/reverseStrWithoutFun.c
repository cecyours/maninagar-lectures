#include <stdio.h>

void main()
{
    char str[100], temp;
    int j, i;

    printf("Enter the string : ");
    scanf("%s", str);

    for(j = 0; str[j]; j++);
    j--;

    for(i = 0; i < j; j--, i++)
    {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }

    printf("reverse string is %s", str);
}