#include<stdio.h>
struct student
{
    char name[100];
    int roll_no,marks;

};

void main()
{
    char n;
    FILE *file;

    struct student s;

    printf("enter student number : ");
    scanf("%d",&s.roll_no);

    printf("enter student name : ");
    scanf("%s",&s.name);

    printf("enter student marks : ");
    scanf("%d",&s.marks);

    file = fopen("note.txt","a+");
    
    fprintf(file,"%4d | %8s | %7d |\n",s.roll_no,s.name,s.marks);
    fprintf(file,"---------------------------\n");
    printf("\n");

    if (!file)
    {
        printf("File name not found...");
        return;
    }
    rewind(file);
    while ((n = fgetc(file)) != EOF)
    {
        printf("%c", n);
    }
    fclose(file);
}