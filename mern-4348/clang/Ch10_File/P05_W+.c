#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "w+");

   fprintf(fp, "wlcome!");

   rewind(fp);

   char ch = fgetc(fp);
   printf(" %c",ch);

   fclose(fp);

}