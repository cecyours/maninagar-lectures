#include <stdio.h>

void main()
{
    char str1[100], str2[100];


    printf("enter string 1");
    scanf("%s", str1);

    printf("Enter string 2");
    scanf("%s", str2);

    int len,i , j, f = 0;
    for(len = 0; str2[len]; len++);

    for(i = 0; str1[i]; i++, j++)
    {
        if(j == len - 1)
        {
            f = 1;
            break;
        }

        if(str1[i] != str2[j])
        {
            j = -1;
        }
    }

    if(f)
    {
        printf("Substring is found");
    }
    else
    {
        printf("No substring is found!");
    }
}