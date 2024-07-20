#include<stdio.h>
void main()
{
    char name[100];
    int i,c=32;

    printf("enter your name : ");
    scanf("%s",&name);

    for (i = 0; i < name[i]; i++)
    {
        if(name[i]>='a' && name[i]<='z' )
        {
            name[i]-=32;
        }       
        else
        {
            name[i]+=32;
        }
    }

    printf("%s",name);
    
    
}