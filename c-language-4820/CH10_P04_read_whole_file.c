#include<stdio.h>
void main()
{
    char ch;
    FILE *file;

    char fileName[100];


    printf("Enter the file Name : ");
    scanf("%s",fileName);

    file = fopen(fileName,"r");


    while((ch=fgetc(file))!=-1)
    {
        printf("%c",ch);
    }


    printf("\nfile read successfully...");
    
}