#include<stdio.h>
struct employee
{
    int employee_id;
    char employee_name[100];
    char employee_post[100];
    int employee_age;
    char martial_status[100];
    float employee_salary;
};
void main()
{
    struct employee e[100];
    int n,i;

    printf("Enter the number of employee:- ");
    scanf("%d",&n);

    printf(" \nEnter employee data \n");
    for(i=0;i<n;i++)
    {
        printf("\nEnter data of employee %d\n", i + 1);

         printf("  Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);

         printf(" Enter Name of employee:- ");
        scanf("%s",&e[i].employee_name);

         printf("Enter Post of employee:- ");
        scanf("%s",&e[i].employee_post);

         printf("Enter Age of employee:- ");
        scanf("%d",&e[i].employee_age);

         printf("Enter Martial Status of employee:- ");
        scanf("%s",&e[i].martial_status);

         printf("Enter Salary of employee:- ");
        scanf("%f",&e[i].employee_salary);
    }
    
    printf("\n\n\n.................EMPLOYEE RECORDS.................\n\n\n");

    printf("%5s | %12s | %14s | %15s | %5s | %15s | %6s\n","Sr.no","Employee ID","Employee Name",
          "Post","Age","Martial status","Salary");

    for(i=0;i<n;i++)
    {
        printf("%5s | %12s | %14s | %15s | %5s | %15s | %6s\n","-----","------------","--------------","---------------","-----","---------------","------");
        printf("%5d | %12d | %14s | %15s | %5d | %15s | %3.2f\n",i+1, e[i].employee_id, e[i].employee_name, 
        e[i].employee_post, e[i].employee_age, e[i].martial_status, e[i].employee_salary);
    }
}