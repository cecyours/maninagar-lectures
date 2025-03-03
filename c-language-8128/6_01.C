#include<stdio.h>
#include<conio.h>
void main()
{
	char name[100]={'H','E','e',NULL,'L','o','\0'};
	char full_name[] = "Gopi \0Kishan";
	clrscr();

		printf("the string  : %s\n",name);
		printf("the name : %s\n",full_name);

	getch();
}