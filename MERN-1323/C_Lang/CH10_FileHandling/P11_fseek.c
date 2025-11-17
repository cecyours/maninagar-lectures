#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("student.txt", "r"); 

    if (fp == NULL)
    {
        printf("Error opening file!\n");
        return 1;
    }

    fseek(fp, 4, SEEK_SET);
    char ch = fgetc(fp);
    printf("Character at 4th position: %c\n", ch);

    fclose(fp); 
    
    return 0;
}