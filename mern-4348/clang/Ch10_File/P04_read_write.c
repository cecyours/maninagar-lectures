#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "r+");

   fprintf(fp, "update data!");

   fclose(fp);

}