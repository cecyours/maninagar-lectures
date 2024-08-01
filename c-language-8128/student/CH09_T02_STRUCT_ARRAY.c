#include <stdio.h>
#include <string.h>
struct student
{
    int s_id;
    char s_name[100];
    double s_marks;
    char s_grade[100];
};

char* getGrade(double marks)
{
    if (marks >= 90)
    {
        return "A+";
    }
    else if (marks>=85 && marks<90)
    {
        return "A";
    }
    else if (marks>=75 && marks <85)
    {
        return "B+";
    }
    else if (marks>=70 && marks<75)
    {
        return "B";
    }
    else if (marks>=55 && marks<70)
    {
        /* code */
        return "C";
    }
    else if (marks >=35 && marks < 55)
    {
        /* code */
        return "D";
    }
    
    else
    {
        return "fail";
    }
}

void main()
{
    struct student s[100];

    int n,i;

    printf("Enter the number of student data : ");
    scanf("%d",&n);

    printf("\n");

    for (i = 0; i < n; i++)
    {
        printf("enter student id : ");
        scanf("%d", &s[i].s_id);

        printf("Enter student name : ");
        scanf("%s",&s[i].s_name);

        printf("Enter student marks : ");
        scanf("%lf",&s[i].s_marks);

        strcpy(s[i].s_grade, getGrade(s[i].s_marks));

        printf("\n\n");
    }
    printf("------------------------------------\n");

    for(i=0;i<n; i++)
    {
        printf("%d | %s | %.2lf | %s \n",s[i].s_id,s[i].s_name,s[i].s_marks,s[i].s_grade);
    }
}