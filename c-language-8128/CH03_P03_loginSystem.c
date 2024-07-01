#include <stdio.h>
#include <string.h>
void main()
{
    char stored_username[100] = "admin";
    char stored_password[100] = "@123i";

    char username[100], password[100];

    printf("Enter your username : ");
    scanf("%s", username);

    printf("Enter your password : ");
    scanf("%s", password);

    if (strcmp(username, stored_username) == 0 && strcmp(stored_password, password) == 0)
    {
        printf("welcome user..");
    }
    else
    {
        printf("username / password is not verified...");
    }
}