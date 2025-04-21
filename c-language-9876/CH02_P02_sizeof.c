#include<stdio.h>
int main()
{
    char i = 90;

    printf("size of char : %d bytes\n",sizeof(char));
    printf("size of int : %d bytes\n",sizeof(int)); // 2
    printf("size of float : %d bytes\n",sizeof(float)); // 4

    printf("size of variable : %d bytes\n",sizeof(i)); // 4

    printf("value of i : %c\n",i);

    printf("-------------\n");

    printf("octal : %d\n",291);
    printf("octal : %o\n",291);
    printf("octal : %x\n",291);
    printf("octal : %e\n",29123456789098765);

    printf("address of i : %x",&i);
}