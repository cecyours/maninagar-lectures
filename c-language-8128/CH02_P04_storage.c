#include<stdio.h>
extern int e=2;
    static int s; // both
void main()
{
    auto int a; // local
    register int r; // local
    printf("the defaut : auto , %d\n",a);
    printf("     the register , %d\n",r);
    printf("       the extern , %d\n",e);
    printf("          static , %d\n",s);
}