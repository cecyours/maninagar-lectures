#include <stdio.h>
#include <conio.h>

void main()
{
    char *name;
    int rollNo;
    float marks;

    printf("Enter the name of Student :\n");
    gets(name);
    printf("Enter roll no.");
    scanf("%d", &rollNo);
    printf("Enter Marks");
    scanf("%f", &marks);

    printf("%s %d %.2f", name, rollNo, marks);
}