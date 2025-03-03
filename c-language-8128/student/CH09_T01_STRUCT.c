#include<stdio.h>
#include<string.h>
struct student
{
    int s_id,s_rollno;
    char s_address[100],s_name[100];
};

void main()
{
    struct student s;

    printf("Enter student name : ");
    scanf("%s",&s.s_name);

    printf("Enter student id : ");
    scanf("%d",&s.s_id); // s[i].s_id

    printf("Enter student roll number : ");
    scanf("%d",&s.s_rollno);

    printf("Enter student address : ");
    scanf("%s",&s.s_address);

    printf("---------------------------------\n");

    printf("Student id  : %d\n",s.s_id);

    printf("Student roll number : %d\n",s.s_rollno);

    printf("Student name : %s\n",s.s_name);

    printf("Student address : %s\n",s.s_address);
}