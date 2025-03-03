#include<stdio.h>
void main()
{
    char name[100];
    int counter=0,i;

    printf("enter the name : ");
    scanf("%s",&name);


    for ( i = 0; name[i]; i++)
    {
        if (name[i]=='a' || name[i]=='A')
        {
            counter++;
        }
        
    }
    printf("number of A in your name is : %d",counter);
    
}