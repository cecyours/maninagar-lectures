#include <stdio.h>
void main()
{
    FILE *file;

    char ch;
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    // open or create file

    file = fopen("task.txt", "a+");

    if (!file)
    {
        printf("File is not avaible !!");
    }

    fprintf(file, "%d + %d = %d\n", a, b, a + b);

    printf("saved !!\n");

    printf("reading... old data...\n");
    fseek(file,0,0);
    while((ch=fgetc(file))!=-1)
    {
        printf("%c",ch);
    }

    fclose(file);
}