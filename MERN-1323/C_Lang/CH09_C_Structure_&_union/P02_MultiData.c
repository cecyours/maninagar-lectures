#include<stdio.h>
#include<string.h>

struct Student
{
   char name[60];
   int rollno;
   double marks;
};

void main(){
    struct Student students[4] = { 
        {"Rosewin", 99, 23.66}, 
        {"Tanvi", 39, 78.66}, 
        {"Janvi", 19, 45.66}, 
        {"Shanvi", 56, 23.66}, 
    };

    for (int i = 0; i < 4; i++)
    {
        printf("Student Details:\n", i+1);
        printf("Student Name : %s\n",  students[i].name );
        printf("Student Roll number : %d\n",  students[i].rollno );
        printf("Student Marks : %.2lf\n",  students[i].marks );
    }
    
    
}