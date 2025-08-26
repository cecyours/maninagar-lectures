#include <stdio.h>

int main()
{
    FILE *fp;
    char ch;
    
    fp = fopen("mine.txt", "r");
    if (fp == NULL)
    {
        printf("File not found");
    }

    printf("File opened successfully!\n");
    while ((ch = fgetc(fp)) != EOF)
    {
        printf("%c", ch);
    }

    fclose(fp);
    return 0;
}
