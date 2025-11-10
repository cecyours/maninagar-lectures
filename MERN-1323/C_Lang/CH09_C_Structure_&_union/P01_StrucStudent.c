#include<stdio.h>
#include<string.h>

struct Student
{
   char name[60];
   int rollno;
   double marks;
};

void main(){
    struct Student s1 = { "Rosewin", 99, 89.66 };

    // strcpy(s1.name, "Rosewin");
    // s1.rollno = 01;
    // s1.marks = 92.5;

    printf("Student Details:\n");
    printf("Student Name : %s\n", s1.name );
    printf("Student Roll number : %d\n", s1.rollno );
    printf("Student Marks : %.2lf\n", s1.marks );
}