#include <stdio.h>

int main()
{
    char name[50];
    int rollNo;
    float marks;

    printf("Enter name of student: ");
    scanf("%s", name);

    printf("Enter roll number: ");
    scanf("%d", &rollNo);

    printf("Enter marks: ");
    scanf("%f", &marks);

    printf("\nStudent Details\n");
    printf("Name   : %s\n", name);
    printf("RollNo : %d\n", rollNo);
    printf("Marks  : %.2f\n", marks);

    return 0;
}
