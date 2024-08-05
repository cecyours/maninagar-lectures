#include <stdio.h>
int i, n;
struct Student
{

    int id;
    char name[100];
    double marks;
};
void sort(struct Student s[])
{
    struct Student temp;
    int j;
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (s[i].marks < s[j].marks)
            {
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }
}
void main()
{
    struct Student s[100] /* = {
        {1, "Mohan Das", 39.32},
        {4, "Neha kankar", 43.32},
        {7, "Titu mama", 88.38},
        {7, "Mohit Bhai", 88.38},
    } */;

    // n = 4;
    printf("Enter no. of Students : ");
    scanf("%d", &n);

    printf("Enter data for student : ");
    for (i = 0; i < n; i++)
    {
        printf("\n\nEnter details for Student %d\n", i + 1);
        printf("Enter student id : ");
        scanf("%d", &s[i].id);

        printf("Enter student name : ");
        scanf("%s", s[i].name);

        printf("Enter student marks : ");
        scanf("%lf", &s[i].marks);
    }

    sort(s);

    printf("%3s + %15s + %5s\n", "---", "---------------", "-----");

    printf("%3s | %15s | %5s\n", "#", "Student Name", "Marks");
    printf("%3s + %15s + %5s\n", "---", "---------------", "-----");
    for (i = 0; i < n; i++)
    {
        printf("%3d | %15s | %3.2lf\n", s[i].id, s[i].name, s[i].marks);
        printf("%3s + %15s + %5s\n", "---", "---------------", "-----");
    }
}