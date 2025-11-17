#include <stdio.h>
int main()
{
    FILE *fp;
    char str[] = "Hello Students!";
    int i = 0;
    fp = fopen("student.txt", "w");
    if (fp == NULL)
    {
        printf("Error opening file!\n");
        return 1;
    }

    while (str[i] != '\0')
    {
        fputc(str[i], fp);
        i++;
    }
    printf("String written character by character.\n");
    fclose(fp);
    return 0;
}