#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("newfile.txt", "w"); 

    if (fp == NULL)
    {
        printf("Error opening file!\n");
        return 1;
    }

    fprintf(fp, "Hello, this is a test.\n"); 
    printf("Data written successfully.\n");

    fclose(fp); 
    
    return 0;
}