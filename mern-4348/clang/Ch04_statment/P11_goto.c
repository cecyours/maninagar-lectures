#include <stdio.h>

void main()
{
    char ch;

    printf("Line 1\n");
    printf("Line 2\n");

code:

    printf("\tLine 3\n");
    printf("\tLine 4\n");
    printf("\tLine 5\n");

    printf("wanna display again ? [y/n] : ");
    scanf(" %c", &ch);
    if (ch == 'y' || ch == 'Y')

        goto code;

    printf("Line 6\n");
    printf("Line 7\n");

}