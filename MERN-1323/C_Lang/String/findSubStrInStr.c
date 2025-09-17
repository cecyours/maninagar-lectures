#include <stdio.h>
#include <string.h>

void main()
{
    char str1[100], str2[100];

    printf("Please enter string 1 ");
    scanf("%s", str1);

    printf("Please enter string 2 ");
    scanf("%s", str2);

    char *pos = strstr(str1, str2);

    if(pos)
    {
        printf("%s is found at %p", str2, pos);
    }
    else
    {
        printf("substring is not found");
    }
}