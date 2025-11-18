#include <stdio.h>
int main()
{
    FILE *fp;
    char ch;
    int count = 0;
    
    fp = fopen("student.txt", "r");
    
    if (fp == NULL)
    {
        printf("File not found!\n");
        return 1;
    }
    
    while ((ch = fgetc(fp)) != EOF)
    {
        count++;
    }
    
    fclose(fp);
    printf("Total characters in file: %d\n", count);
    
    return 0;
}