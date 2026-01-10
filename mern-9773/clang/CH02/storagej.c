#include<stdio.h>

    int e;
    extern int e;
    static int s;
void main() {

    auto int a;
    register int r;

    printf("extern = %d\n", e);
    printf("static = %d\n", s);
    printf("auto = %d\n", a);
    printf("register = %d\n", r);


    
}