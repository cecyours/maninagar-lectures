#include <stdio.h>
#include <string.h>
void main()
{
    char email[] = "user@gmail.com";
    char password[] = "kites@123";

    char inputEmail[100], inputPassword[100];

    printf("Enter email address : ");
    scanf("%s", inputEmail);

    printf("Enter the password : ");
    scanf("%s", inputPassword);

    if (strcmp(email, inputEmail) == 0 && strcmp(password, inputPassword)==0)
    {
        printf("welcome");
    }
    else
    {
        printf("try again, invalid email/ password");
    }
}
