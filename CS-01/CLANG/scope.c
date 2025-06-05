#include <stdio.h>
// global

int e;

extern int e;

static int s;
int main()
{
    auto int b;
    register int r;

    printf(" auto : %d\n", e);
    printf("register : %d\n", r);
    printf(" extern : %d\n", e);
    printf(" static : %d\n", s);

    // local
    return 0;
}
