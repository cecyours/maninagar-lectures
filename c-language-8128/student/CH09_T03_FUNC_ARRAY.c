#include<stdio.h>
int n,i;
struct student 
{
    int id;
    char name[100];
    double marks;
};
void sort(struct student s[])
{
    struct student temp;
    int j;
    for ( i = 0; i < n; i++)
    {
        for ( j =i+1; j < n; j++)
        {
            /* code */
            if (s[i].marks < s[j].marks)
            {
                temp=s[i];
                s[i]=s[j];
                s[j]=temp;
            }
            
        }
        
    }
    
}
void main()
{
    struct student s[100];
    printf("Enter number of student data : ");
    scanf("%d",&n);

    printf("enter student data..\n");

    for ( i = 0; i < n; i++)
    {
        printf("\n\nEnter data for student %d\n",i+1);

        printf("Enter student id : ");
        scanf("%d",&s[i].id);

        printf("Enter student name : ");
        scanf("%s",&s[i].name);

        printf("Enter student marks : ");
        scanf("%lf",&s[i].marks);
    }
    
    sort(s);

    printf("----------------Data--------------\n");

    for (i = 0; i < n; i++)
    {
        /* code */
        printf("|| %3d | %15s | %3.2lf ||\n",s[i].id, s[i].name,s[i].marks);
        printf("|| %3s | %15s | %5s||\n","---", "---------------","------");
    }
    
}