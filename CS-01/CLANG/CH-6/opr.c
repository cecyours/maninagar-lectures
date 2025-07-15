#include <stdio.h>
#include <string.h>
#include "mine.h"

int main()
{
    // String declaration
    char str[100] = "THis is me";
    char str2[100];

    // Length and comparison
    int len = strlen("hello world");
    int cmp = strcmp("hello", "hello");

    // String concatenation
    strcat(str, " ");
    strcat(str, "added");

    // Copy string
    strcpy(str2, str);

    // Print string length and comparison result
    printf("This is length: %d\n", len);
    printf("This is comparison result: %d\n", cmp);

    // Print copied string and original
    printf("Value of str2: %s\n", str2);
    printf("Value of str: %s\n", str);

    // Convert to uppercase
    strupr(str);
    printf("Uppercase str: %s\n", str);

    // Convert to lowercase
    strlwr(str);
    printf("Lowercase str: %s\n", str);

    // strchr example
    char str4[100] = "Hello i have one Question ?";
    char ch = '*';
    char *pos = strchr(str4, ch);

    if (pos)
        printf("'%c' is found at address %p\n", ch, (void *)pos);
    else
        printf("'%c' is not found.\n", ch);

    // strstr example
    char str5[100] = "Human";
    char str6[100] = "man";
    char *pos1 = strstr(str5, str6);

    if (pos1)
        printf("%s is found in %s.\n", str6, str5);
    else
        printf("%s is not found in %s.\n", str6, str5);

    // Reverse string
    strrev(str5);
    printf("Reversed str5: %s\n", str5);

    // Masking string using strset
    char str7[100] = "Password";
    char ch2 = '*';
    strset(str7, ch2);
    printf("Masked String: %s\n", str7);

    return 0;
}
