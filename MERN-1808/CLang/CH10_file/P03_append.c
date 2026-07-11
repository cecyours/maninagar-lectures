#include <stdio.h>

int main() {
    FILE *fp;

    fp = fopen("student.txt", "a");
    
    fprintf(fp, "\nNew student added!");
    
    fclose(fp);

    return 0;
}