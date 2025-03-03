
#include <stdio.h>
extern int e = 39; // global
static int s; // global + local
void main()
{
    auto int a;     // local
    register int r; // local

    printf("auto : %d\n", a);
    printf("register : %d\n", r);
    printf("extern : %d\n", e);
    printf("static : %d\n", s);
}