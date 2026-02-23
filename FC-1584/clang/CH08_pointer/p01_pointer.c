#include <stdio.h>
int main()
{
    int num = 10;                                   // normal variable
    int *p;                                         // pointer declaration
    p = &num;                                       // pointer initialization with address of num
    printf("Address of num: %p\n", p);              // print address
    printf("Value of num using pointer: %d\n", *p); // dereference to get value
    return 0;
}
