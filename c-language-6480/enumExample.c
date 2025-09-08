#include <stdio.h>

void main()
{
    enum day {MON = 1, TUE, WED, THU = 101, FRI, SAT, SUN};

    printf("Monday : %d\n", MON);
    printf("Tueday : %d\n", TUE);
    printf("Wedday : %d\n", WED);

    printf("Thursday : %d\n", THU);
    printf("Friday : %d\n", FRI);


}