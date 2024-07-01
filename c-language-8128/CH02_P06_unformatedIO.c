#include<stdio.h>
//#include<conio.h>

/*
	getch
	getche
	getchar
*/

void main()
{
	char ch;
	 clrscr();
	printf("Enter the character : ");
       //	ch = getch();   //get a chacter without showing, without enter
       //ch = getche(); // show the charcter, without enter
	 ch = getchar(); // show & enter

	printf("\n--------------\n");
	printf("you entered : %c\n",ch);
	printf("\n ----------- \n");
	putchar(ch);
	getch();
}