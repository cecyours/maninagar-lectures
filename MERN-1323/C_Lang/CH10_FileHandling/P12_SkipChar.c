#include <stdio.h>
int main()
{
    FILE *fp;
    fp = fopen("student.txt", "w+");
    if (fp == NULL)
    {
        printf("Error opening file!\n");
        return 1;
    }
    fputs("ABCDEFGH", fp);

    fseek(fp, 4, SEEK_SET);
    fputc('X', fp);
    fclose(fp);
    printf("File modified successfully.\n");
    return 0;
}