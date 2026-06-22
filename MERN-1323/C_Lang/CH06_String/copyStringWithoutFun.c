#include <stdio.h>

void main()
{
    char str1[100], str2[100];

    printf("Please enter the string :");
    scanf("%s", str1);

    int index = 0;
    while (str1[index])
    {
        /* code */
        str2[index] = str1[index];
        index++;
    }

    str2[index] = '\0';

    printf("Copied string is : %s", str2);
    
}