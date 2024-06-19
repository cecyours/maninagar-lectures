#include <stdio.h>

struct Student
{

    int student_id;
    char student_name[100];
    float student_marks;
};

void main()
{
    struct Student s[100];
    int n, i;

    printf("Enter the number of students : ");
    scanf("%d", &n);

    printf("Enter records : ");

    for (i = 0; i < n; i++)
    {
        printf("\nEnter record for student %d\n", i + 1);

        printf("   Enter id of student : ");
        scanf("%d", &s[i].student_id);

        printf(" Enter name of student : ");
        scanf("%s", &s[i].student_name);

        printf("Enter marks of student : ");
        scanf("%f", &s[i].student_marks);
    }

    printf("\n\n\n========= RECORD =============\n\n\n");

    printf("%3s | %7s | %15s | %6s \n", "Sr.", "Roll No", "Student Name", "Marks");

    for (i = 0; i < n; i++)
    {
        printf("%3s + %7s + %15s + %6s \n", "---", "-------", "---------------", "------");
        printf("%3d | %7d | %15s | %3.2f \n", i + 1, s[i].student_id, s[i].student_name, s[i].student_marks);
    }
}