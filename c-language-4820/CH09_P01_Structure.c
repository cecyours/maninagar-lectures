#include<stdio.h>
#include<string.h>
struct Student
{
    int rollNo;
    char name[100];
    float marks;
};


void main()
{
    struct Student s1,s2={10,"Ravi",29.49}; // declaration & initialization

    s1.rollNo = 10;
    strcpy(s1.name,"Mohan");
    s1.marks = 92.3;

    printf("Welcome %s, your roll no is %d and marks are  %f\n",s1.name,s1.rollNo,s1.marks);
    printf("Welcome %s, your roll no is %d and marks are  %f\n",s2.name,s2.rollNo,s2.marks);
}