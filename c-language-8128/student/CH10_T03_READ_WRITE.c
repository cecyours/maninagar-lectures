#include <stdio.h>
void main()
{
    FILE *file;
    char name[100];
    char f_name[100];
    char n, i;

    printf("Enter file name to create : ");
    scanf("%s", &f_name);

    file = fopen(f_name, "w");

    printf("Enter message to input in file : ");
    scanf("%s", &name);

    fprintf(file, name);

    printf("Your file is created..\n");

    fclose(file);

    scanf("%c", &i);
    printf("Do u want to read your file(y/n) : ");
    scanf("%c", &i);

    if (i == 'Y' || i == 'y')
    {
        file = fopen(f_name, "r");

        while ((n = fgetc(file)) != -1)
        {
            printf("%c", n);
        }
    }
}