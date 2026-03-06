#include <stdio.h>

struct Student
{
    int roll;
    char name[30];
    float marks;
};

void display(struct Student s)
{
    char grade;

    if (s.marks >= 90)
        grade = 'A';
    else if (s.marks >= 75)
        grade = 'B';
    else if (s.marks >= 60)
        grade = 'C';
    else
        grade = 'D';

    printf("\nStudent Details\n");
    printf("Roll: %d\n", s.roll);
    printf("Name: %s\n", s.name);
    printf("Marks: %.2f\n", s.marks);
    printf("Grade: %c\n", grade);
}

int main()
{
    struct Student s;

    printf("Enter Roll, Name, Marks: ");
    scanf("%d %s %f", &s.roll, s.name, &s.marks);

    display(s);

    return 0;
}