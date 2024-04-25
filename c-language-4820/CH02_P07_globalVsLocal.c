#include <stdio.h>
int f; // global

void display()
{
    f = 299;
    printf("i am display : %d\n",f);
}
void main()
{
    int i=329;
    // clrscr();
    
    printf("local variable : %d\n", i); // 329
    display(); //
    f = 500;
    printf("global variable : %d\n", f);

    // getch();
}