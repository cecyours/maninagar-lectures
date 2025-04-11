#include <stdio.h>
int main()
{
    int day;

    printf("Enter the day number [1-7] : ");
    scanf("%d", &day);

    if (day == 1)
    {
        printf("Monday\n");
    }
    else if (day == 2)
    {
        printf("Tuesday\n");
    }
    else if (day == 3)
    {
        printf("Wednesday\n");
    else if(day==4)
    {        printf("thursday");
    }

    else if(day==5)
    {        printf("friday\n");
    }

    else if(day==6)
    {        printf("saturday\n");
    }

    else if(day==7)
    {        printf("sunday\n");
    }
    )
    }
    else
    {
        printf("Invalid Day no.");
    }
}