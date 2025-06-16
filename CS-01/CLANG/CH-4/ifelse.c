#include <stdio.h>

int main()
{

    int num = 1;

    printf("Enter The Number  :");
    scanf("%d", &num);

    if (num > 80)
    {
        printf("You have distiction !!!\n");
    }
    else if (num > 70)
    {
        printf("You second class !!!\n");
    }
    else if (num > 50)
    {
        printf("You have first-class !!!\n");
    }
    else if (num > 33)
    {
        printf("Visit again !!!\n");
    }
    else
    {
        printf("Please First give exam atleast !");
    }

    return 0;
}
