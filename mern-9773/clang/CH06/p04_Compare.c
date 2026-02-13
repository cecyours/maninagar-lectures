#include <stdio.h>
#include <string.h>

void main()
{
    char password[10] = "ABC"; // default value for password
    char input[10];
    int status;

    printf("Enter password : ");
    scanf("%s", input);
    status = strcmp(input, password);
    printf("status : %d\n", status);

    if (!status) // if status == 0
    {
        printf("Login succeed ;) \n");
    }
    else
    {
        printf("login failed.. \n");
    }
}