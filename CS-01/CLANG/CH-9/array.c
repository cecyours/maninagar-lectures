#include <stdio.h>

struct Student
{
    int id;
    char name[50];
    float marks;
};

int main()
{

    struct Student arr[2] = {
        {2, "Alice", 90.0},
        {3, "Bob", 88.5}};

    for (int i = 0; i < 2; i++)
    {
        printf("\nstudent %d , %s with marks %.2f\n ", arr[i].id, arr[i].name, arr[i].marks);
    }

    return 0;
}
