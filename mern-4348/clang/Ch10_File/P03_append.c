#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "a");

   fprintf(fp, "\nNew student added!");

   fclose(fp);

}