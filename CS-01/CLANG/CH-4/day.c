#include <stdio.h>

int main()
{

    int day;

    printf("Enter The dayber  :");
    scanf("%d", &day);

    if (day == 1)
    {
        printf("Today is Monday !!!\n");
    }
    else if (day == 2)
    {
        printf("Tuesday !!!\n");
    }
    else if (day == 3)
    {
        printf("Wednesday !!!\n");
    }
    else if (day == 4)
    {
        printf("Thuresday !!!\n");
    }
    else if (day == 5)
    {
        printf("Friday !");
    }
    else if (day == 6)
    {
        printf("Saturday !");
    }
    else
    {
        printf("Enjoy  !");
    }

    return 0;
}
