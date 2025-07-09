#include <stdio.h>
#include <string.h>
#include "mine.h"

int main()
{

    char str[100] = "THis is me";
    char str2[100];
    int len = strlen("hello world");
    int cmp = strcmp("hello", "hello");

    strcat(str, " ");
    strcat(str, "added");

    strcpy(str2, str);

    printf("This is length of %d\n", len);
    printf("This is comparision of %d\n", cmp);
    printf("This is value of  str2 %s\n", str2);

    printf("This is value of  str2 %s\n", str);

    strupr(str);

    printf("This is value of  str2 %s\n", str);

    strlwr(str);

    printf("This is value of  str2 %s\n", str);

    char str4[100] = "Hello i have one Question ?", ch = '*', *pos;
    pos = strchr(str4, ch);

    if (pos)
        printf(" '%c' is found at address %p\n", ch, pos);
    else
        printf(" '%c' is not found.\n", ch);

    char str5[100] = "Human", str6[100] = "man";
    char *pos1;

    pos1 = strstr(str5, str6);

    if (pos1)
        printf("%s is found.\n", str6);
    else
        printf("%s is not found.\n", str6);

    strrev(str5);

    printf("%s reversed.\n", str5);

    char str7[100] = "Password", ch2 = '*';

    strset(str7, ch2);

    printf(" Masked String : %s\n", str7);

    return 0;
}
