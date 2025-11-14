#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("hey.txt", "r+");

   fprintf(fp, "Updated data");

   fclose(fp);

}