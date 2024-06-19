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

    printf("\n\n\n............EMPLOYEE RECORDS............\n\n\n");
    printf("Enter the number of employee:- ");
    scanf("%d",&n);

    printf(" Enter the data of employee ");
    for(i=0;i<n;i++)
    {
        printf("Enter data of employee %d\n",i+1);

        printf("Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);

         printf("Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);

         printf("Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);

         printf("Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);

         printf("Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);

         printf("Enter ID of employee:- ");
        scanf("%d",&e[i].employee_id);
    }
    
}