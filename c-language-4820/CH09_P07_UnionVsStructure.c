#include<stdio.h>


struct StcData{

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
    struct StcData s;
    union UnData u;


    s.a = 18;
    s.b = 'H';

    s.a = 90;

    printf("using structue : %d, %c \n",s.a, s.b);


    u.a = 87;
    u.b = 'A';


    u.a = 66;
    printf("using union : %d, %c \n",u.a, u.b);

}