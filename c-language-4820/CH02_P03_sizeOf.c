
/* to get the size of data type / variable */

// sizeof

//  int sizeof(value)
#include<stdio.h>
void main()
{
    int a;
    int ans;
    // clrscr();
        ans = sizeof(a); // 4

        printf("the size of int : %d\n",ans);

        ans = sizeof(double);
        printf("the size of double : %d\n",ans);

        printf("short int : %d\n",sizeof(short int));
        printf("long : %d\n",sizeof(long));
    // getch();
}