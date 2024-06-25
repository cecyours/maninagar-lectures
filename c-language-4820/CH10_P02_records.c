#include<stdio.h>
void main()
{
    FILE *recordFile;
    int a,b,c;

    recordFile = fopen("records.txt","a"); // append mode, means write without replacing old file.

    printf("Enter 2 number : ");
    scanf("%d,%d",&a,&b);

    c = a+b;

    fprintf(recordFile,"%d + %d = %d \n",a,b,c);

    printf("record inserted succesfully");
    fclose(recordFile);
}