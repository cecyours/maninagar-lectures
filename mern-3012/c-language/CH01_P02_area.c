#include <conio.h>
#include <stdio.h>

void main()
{
	float area, PI = 3.14, r;
	clrscr();
	printf("Enter the radius : ");
	scanf("%f", &r);

	area = r * r * PI;

	printf("Area is %.2f\n", area);

	getch();
}
