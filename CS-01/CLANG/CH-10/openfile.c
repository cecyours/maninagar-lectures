#include <stdio.h>

int main()
{
    FILE *fp;
    char ch;
    char name[50];
    int age;

    // Open file in write mode
    fp = fopen("sxy.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file for writing.\n");
        return 1;
    }

    // Writing to the file
    fprintf(fp, "Alice 30\nBob 25");

    fputc('\n', fp); // writing a single character (newline)
    fputc('Z', fp);  // writing a single character 'Z'

    // Close the file
    fclose(fp);

    fp = fopen("sxy.txt", "a"); // Append mode
    if (fp == NULL)
    {
        printf("Unable to open file for appending.\n");
        return 1;
    }

    fprintf(fp, "\nCharlie 40"); // appending data

    fclose(fp);

    // Open file in write mode
    fp = fopen("sxy.txt", "r");

    if (fp == NULL)
    {
        printf("Unable to open file for writing.\n");
        return 1;
    }

    printf("Reading from textfile.txt:\n");

    while ((ch = fgetc(fp)) != EOF)
    { // using fgetc
        putchar(ch);
    }

    return 0;
}
