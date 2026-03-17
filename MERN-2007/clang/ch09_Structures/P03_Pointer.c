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
    
    struct Student *ptr = students;
    float sum = 0;


    for (int i = 0; i < 4; i++)
    {
        printf("rol number %d Marks of %s: %.2f\n",(ptr + i)->rollno, (ptr + i)->name, (ptr + i)->marks);
        sum += (ptr + i)->marks;
    }
    
    float avg = sum / 4;
    printf("Average marks: %.2f", avg); 
    
}