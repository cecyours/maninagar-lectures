#include<stdio.h>
void main()
{
    FILE* file;

    file = fopen("file-sample.txt","w");

    fprintf(file,"I am new");

    printf("your file has been created !!!");
    fclose(file);
}