#include<stdio.h>
void main()
{
    FILE *recordFile;
    int a, b, c;

    recordFile = fopen("records.txt","a");

    printf("Enter two numbers:- ");
    scanf("%d %d",&a,&b);

    c = a + b;

    fprintf(recordFile,"%d + %d = %d \n",a,b,c);

    printf("record inserted succesfully");
    fclose(recordFile);
}