#include<stdio.h>

struct stcData
{
    int a;
    char b;
};

union UnData
{
    int a;
    char b;
};

void main()
{
    struct stcData s;
    union UnData u;

    s.a = 11;
    s.b = 'b';

    printf("using structue : %d, %c \n",s.a, s.b);

    u.a = 12;
    u.b = 'c';
    
    printf("using union : %d, %c \n",u.a, u.b);
}