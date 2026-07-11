#include <stdio.h>

int main(){
    FILE *fp;

    fp = fopen("student.txt", "w");

    fprintf(fp, "Hello Students!");

    fclose(fp);

    return 0;
}