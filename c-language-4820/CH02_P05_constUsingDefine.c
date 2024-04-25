#include<stdio.h>
#define A 100
void main()
{

    // clrscr();
    printf("the value is %d\n",A);

    // undef the original variable

    #undef A

    #define A 190

    printf("new value : %d \n",A);
    // getch();
}