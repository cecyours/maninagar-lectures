#include <stdio.h>
#include "mine.h"

int main()
{

    char name1[100] = "CEC";
    char input[10];
    int status = 0, i;

    printf("Enter The Password : ");

    getLineInput(input, sizeof(input));

    for (i = 0; input[i]; i++)
    {
        if (name1[i] != input[i])
        {
            status = name1[i] - input[i];
            break;
        }
    }

    if (!status) // if status is 0.
        printf("Login succeed !! ;) status : %d\n", status);
    else
        printf("Login Failed !! :( status : %d\n", status);

    return 0;
}
