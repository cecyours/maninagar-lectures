#include <stdio.h>
#include <string.h>

char *strlwr(char str[])
{
    int len = strlen(str);
    int i;
    for (i = 0; i < len; i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 32;
    }
    return str;
}

char *strupr(char str[])
{
    int len = strlen(str);
    int i;
    for (i = 0; i < len; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
            str[i] -= 32;
    }
    return str;
}
void main()
{
    char str1[] = "12B";
    char str2[] = "12A";

    printf("str 1 in lower : %s\n", strlwr(str1));
    printf("str 1 in upr : %s\n", strupr(str1));

    printf("compare 2 string : %d\n",strcmp(str1,str2));
}