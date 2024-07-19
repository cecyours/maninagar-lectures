#include<stdio.h>
#include<conio.h>
void main()
{           char name[100];
	clrscr();
		printf("enter your name : ");
		gets(name);

		printf("your name is : %s\n",name);

		printf("the length : %d\n",strlen(name));

		printf("lowercase : %s\n",strlwr(name));

		printf("Upper case : %s\n",strupr(name));

	getch();
}