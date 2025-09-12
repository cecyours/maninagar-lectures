#include<stdio.h>
int main()
{
    char name[100];
    int i;
    int len=0;
    printf("Enter the name : ");
    scanf("%s",name);

    printf("%s",name);

    for(i=0;name[i];i++)
    {
        printf("\n=> %c",name[i]);
        len++;
    }
    printf("\n");

    printf("the length : %d\n",len);

    printf("\n ======== ====== =========== \n");

    for(i=len-1;i>=0;i--)
    {
        printf("%c",name[i]);
    }
}