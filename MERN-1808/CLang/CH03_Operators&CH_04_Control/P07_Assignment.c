#include<stdio.h>

void main () {
    int a,b;

    printf("Enter the value:");
    scanf("%d,%d", &a,&b);

    a+=b;
    printf("Value += : %d\n", a);

    a*=b;
    printf("Value *= : %d\n", a);

    a<<=b;
    printf("Value <<= : %d\n", a);

    a>>=b;
    printf("Value >>= : %d\n", a);

    a%=10;
    printf("Value %= : %d\n", a);
    

} 