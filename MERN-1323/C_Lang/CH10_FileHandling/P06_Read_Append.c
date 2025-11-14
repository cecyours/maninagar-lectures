#include<stdio.h>

void main(){
    FILE *fp;

    fp = fopen("student.txt", "a+");
    fprintf(fp, "\nAppended data!");

    rewind(fp);

    char ch;
    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
    }
    
    fclose(fp);

}