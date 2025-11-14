#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("hey.txt", "a");

   fprintf(fp, "\nNew student added!");

   fclose(fp);

}