
#include<stdio.h>

extern int e=10; // global
static int s; // global + local

int main()
{
    auto int a; // local
    register int r; // local

   printf("    auto : %d\n",a);
   printf("register : %d\n",a);
   printf(" extern  : %d\n",e);
   printf(" static  : %d\n",s);
}