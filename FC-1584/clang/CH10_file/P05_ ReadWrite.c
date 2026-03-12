#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "W+");

    fprintf(fp, "Welcome!");

    rewind(fp);

    char ch = fgetc(fp);
    printf("%c", ch);

   fclose(fp);

}