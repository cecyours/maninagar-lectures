#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b;

    printf("Please enter two numbers :\n");
    scanf("%d %d", &a, &b);

    printf("a += b is : %d\n", a+=b);
    printf("a *= b is : %d\n", a *= b);
    printf("a &= b is : %d\n", a&=b);
    printf("a <<= b is : %d\n",a<<=b);
    printf("a >>= b is : %d\n",a>>=b);
    printf("a %%= b is : %d\n",a%=b);
}