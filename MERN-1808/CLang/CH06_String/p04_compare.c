#include <stdio.h>
#include <string.h>

void main()
{
    char password[10] = "ABC"; 
    char input[10];
    int status;
    
    printf("Enter password : ");
    // gets(input);
    scanf("%s", input);
    
    status = strcmp(input, password);
    printf("status : %d\n", status);

    if (!status) 
    {
        printf("Login succeed ;) \n");
    }
    else
    {
        printf("login failed.. \n");
    }
 
}
