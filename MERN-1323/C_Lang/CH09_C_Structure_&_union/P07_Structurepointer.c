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
    struct Student s1 = {104, "David", 88.5};
    struct Student *ptr = &s1; 
 
    printf("Roll No: %d\n", ptr->rollNo);
    printf("Name: %s\n", ptr->name);
    printf("Marks: %.2f\n", ptr->marks);
  
    ptr->marks = 95.0;
    printf("Updated Marks: %.2f\n", ptr->marks);
    
    return 0;
}