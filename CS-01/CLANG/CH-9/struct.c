#include <stdio.h>

struct Student
{
    int id;
    char name[50];
    float marks;
};

void updateMarks(struct Student *s)
{
    s->marks += 5; // Arrow operator used
}

int main()
{

    

    int a;
    printf("Enter The value : ");
    scanf("%d", &a);
    return 0;
}
