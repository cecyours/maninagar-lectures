#include <stdio.h>

/*
    variable : those whose value are changeble
 */

/*
    constant : those whose value are not changeble
 */

void main()
{
   const int i = 200;
    // clrscr();
    printf("current value of i : %d\n", i); // 200

    // i = 300;  // couldn't change the value bcz of const keywords 
    printf("current value of i : %d\n",i); // 300
    // getch();
}