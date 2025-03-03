#include<stdio.h>
void main()
{
    FILE* file;
    char name[100];

    file = fopen("student.txt","w");

    printf("Enter file name : ");
    scanf("%s",&name);

    fprintf(file,name);

    printf("Your file is created..");

    fclose(file);
    
}