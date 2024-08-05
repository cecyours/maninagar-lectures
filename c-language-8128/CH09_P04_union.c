#include <stdio.h>

union Node
{
    int i;
    char c;
};

void main()
{

    union Node n;

    n.i = 66;
    printf("accessing int : %d\n", n.i);


    n.c = 'A';
    printf("accessing chr : %c\n", n.c);
}