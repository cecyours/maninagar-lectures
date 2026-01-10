#include<stdio.h>

int e;
extern int e;
static int s;

void main(){

    auto int a;
    register int r;

    printf("auto : %d\n",a);
    printf("register : %d\n",r);
    printf("static : %d\n",s);
    printf("extern : %d\n",e);

}