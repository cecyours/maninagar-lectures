#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("student.txt", "r");

    if (fp == NULL)
    {
        printf("File not found!\n");
        return 1;
    }
    else
    {
        printf("File opened successfully in read mode.\n");
    }

    fclose(fp); 
    
    return 0;
}
