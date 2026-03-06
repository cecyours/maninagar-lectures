#include <stdio.h>
#include <string.h>

struct Student
{
    int rollNo;
    char name[50];
    float marks;
};

int main()
{
    struct Student students[3] = {
        {101, "Alice", 90.5},
        {102, "Bob", 85.0},
        {103, "Charlie", 92.0}};

    for (int i = 0; i < 3; i++)
    {
        printf("Student %d: %s, Roll No: %d, Marks: %.2f\n",
               i + 1, students[i].name, students[i].rollNo, students[i].marks);
    }
    
    return 0;
}