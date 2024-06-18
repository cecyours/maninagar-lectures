#include <stdio.h>
void main()
{
    int a = 10, b = 398, c = 310;

    int *ptr;

    printf("the value of a : %d at %p, %llu\n", a, &a, &a);
    printf("the value of b : %d at %p, %llu\n", b, &b, &b);
    printf("the value of c : %d at %p, %llu\n", c, &c, &c);

    printf("\n----------------------\n");

    ptr = &a; //a 

    printf("the address  %llu, with having %d\n", ptr, *ptr); // 7
   
    ptr--; // b
    printf("the address  %llu, with having %d\n", ptr, *ptr); // 6

    ptr++; // a
    printf("the address  %llu, with having %d\n", ptr, *ptr);// 7
}