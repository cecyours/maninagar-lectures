#include <stdio.h>

int main()
{

    char ch;
    int size;

    size = sizeof(ch);

    printf("size of character : %d byte\n", size);

    size = sizeof(int); // method 2 with data type keyword
    printf(" size of integer : %d byte\n", size);
    return 0;
}
