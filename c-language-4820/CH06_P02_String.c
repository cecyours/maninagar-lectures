#include<stdio.h>
void main()
{
    int a[10];
    char name[100]="Hel\0lo World.."; // String is array of characters


    printf("%s\n",name);

    printf("Hello User : %c\n",name[0]);
}