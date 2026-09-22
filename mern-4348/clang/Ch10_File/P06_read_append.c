#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "a+");

   fprintf(fp, "\nwlcome......!");

   rewind(fp);

   char ch;
   while ((ch = fgetc(fp)) != EOF)
   {
    /* code */
    putchar(ch);
   }
   
  

   fclose(fp);

}