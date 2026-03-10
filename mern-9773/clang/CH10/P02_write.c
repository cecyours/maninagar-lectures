#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "w");

   fprintf(fp, "Hello Im Dhaval!");

   fclose(fp);

}