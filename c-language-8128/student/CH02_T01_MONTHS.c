#include<stdio.h>


void main()
{
    int month;

    printf("enter any number between : ");
    scanf("%d",&month);



    enum month {JAN=1, FEB, MAR,APR,MAY,JUN,JUL, AUG,SEP,OCT,NOV,DEC};

    if(month==JAN)
    {
        printf("you entered JANUARY");
    }
    else if(month==FEB)
    {
        printf("you entered FEBRUARY");
    }
    else if(month==MAR)
    {
        printf("you entered MARCH");
    }
    else if(month==APR)
    {
        printf("you entered APRIL");
    }
    else if(month==MAY)
    {
        printf("you entered MAY");
    }
    else if(month==JUN)
    {
        printf("you entered JUNE");
    }
    else if(month==JUL)
    {
        printf("you entered JULY");
    }
    else if(month==AUG)
    {
        printf("you entered AUGUST");
    }
    else if(month==SEP)
    {
        printf("you entered SEPTEMBER");
    }
    else if(month==OCT)
    {
        printf("you entered OCTOMBER");
    }
    else if(month==NOV)
    {
        printf("you entered NOVEMBER");
    }
    else if(month==DEC)
    {
        printf("you entered DECEMBER");
    }
    else
    printf("INVALID NUMBER ENTERED..");

}