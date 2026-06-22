#include <stdio.h>

void main()
{
    char str1[100], str2[100];
    int index;

    printf("Enter string 1 : ");
    scanf("%s", str1);

    printf("Enter string 2 : ");
    scanf("%s", str2);

    for(index = 0; str1[index]; index++);

    str1[index] = ' ';
    index++;

    for(int index2 = 0; str2[index2]; index2++, index++)
    {
        str1[index] = str2[index2];
    }

    str1[index] = '\0';

    printf("Final string is : %s", str1);
}