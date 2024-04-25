/* 
    latter : a,b,c..., A, B, C.. , 0..9, '5', '

    digit : 0..9

    special symbol : &,% , * ,( ) .....

    string : "Hello World ", "dummer"

 */

#include<stdio.h>

void main()
{
    char ch='a';
    int i = 12;
    float f = 28.42;
    double d =28.42;
    char name[] = "Hello World";

    // clrscr();
        printf("character : %c\n",ch);
        printf("int  : %d\n",i);
        printf("float : %f\n",f);
        printf("double : %lf\n",d);
        printf("String : %s\n",name);
    // getch();

}