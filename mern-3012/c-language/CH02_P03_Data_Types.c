#include <stdio.h>

int main()
{
    int a = 10;          // Standard integer
    short b = 100;       // Short integer
    long c = 100000;     // Long integer
    unsigned int d = 50; // Unsigned integer (no negative values)
    signed int e = -50;  // Signed integer (default)

    printf("int: %d\n", a);
    printf("short: %hd\n", b);
    printf("long: %ld\n", c);
    printf("unsigned int: %u\n", d);
    printf("signed int: %d\n", e);

    return 0;
}
