#include<stdio.h>
#include<string.h>
void main()
{
    char stored_username[100] = "student" ;
    char stored_password[100] = "123@";

    char username[100],password[100];

    printf("enter username : ");
    scanf("%s",&username);

    printf("enter password : ");
    scanf("%s", &password);

    if(strcmp(stored_username,username)==0 && strcmp(stored_password,password )==0)
    {
        printf("welcome user..");
    }
    else
    {
        printf("incorrect username or password..");
    }
}