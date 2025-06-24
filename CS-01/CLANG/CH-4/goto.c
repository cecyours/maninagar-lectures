#include <stdio.h>

int main()
{

    char ch;
    printf("Hello i am on line number %d\n", 1);
    printf("Hello i am on line number %d\n", 2);
END:
    printf("Hello i am on line number %d\n", 3);

    printf("Hello i am on line number %d\n", 4);

    printf("Hello i am on line number %d\n", 5);
    printf("Hello i am on line number %d\n", 6);

    printf("Hello i am on line number %d\n", 7);

    printf("wanna display again ? [y/n] : ");
    scanf("%c", &ch);
    if (ch == 'y' || ch == 'Y')
        goto END;

    printf("Line 9\n");
    printf("Line 10\n");
    return 0;
}
