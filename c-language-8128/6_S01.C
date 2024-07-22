#include<stdio.h>
#include<conio.h>
void main()
{
	int roll_no,marks;
	char name[100],div[10];

	clrscr();


		printf("enter your name : ");
		gets(name);

		printf("enter your roll number : ");
		scanf("%d",&roll_no);

		printf("enter your division : ");
		scanf("%s",&div);

		printf("enter your total marks : ");
		scanf("%d",&marks);


		printf("your name is : %s\n",name);
		printf("your roll number is : %d\n",roll_no);
		printf("your division is : %s\n",div);
		printf("your total marks is : %d\n",marks);

	getch();

}