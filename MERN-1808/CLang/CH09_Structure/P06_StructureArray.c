#include <stdio.h>

struct Student
{
    int rollNo;
    char name[50];
    float marks;
};

int main()
{
    struct Student students[3];

    // Input
    for (int i = 0; i < 3; i++)
    {
        printf("\nEnter details of Student %d\n", i + 1);

        printf("Enter Roll No: ");
        scanf("%d", &students[i].rollNo);

        printf("Enter Name: ");
        scanf("%s", students[i].name);

        printf("Enter Marks: ");
        scanf("%f", &students[i].marks);
    }

    // Output
    printf("\n----- Student Details -----\n");

    for (int i = 0; i < 3; i++)
    {
        printf("\nStudent %d\n", i + 1);
        printf("Roll No : %d\n", students[i].rollNo);
        printf("Name    : %s\n", students[i].name);
        printf("Marks   : %.2f\n", students[i].marks);
    }

    return 0;
}