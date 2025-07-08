#include <stdio.h>
#include <string.h>
#include "mine.h"

int main()
{

    int len = strlen("hello world");
    int cmp = strcmp("hello", "hello");

    printf("This is length of %d\n", len);
    printf("This is comparision of %d\n", cmp);

    return 0;
}
