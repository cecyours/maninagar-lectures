#include <stdio.h>

void main()
{
    enum day
    {
        MON = 2,
        TUE,
        WED,
        THU = 102,
        FRI,
        SAT,
        SUN
    };
    printf("MONDAY : %d\n", MON);
    printf("TUESDAY : %d\n", TUE);
    printf("WEDNESDAY : %d\n", WED);
    printf("THURSDAY : %d\n", THU);
    printf("FRIDAY : %d\n", FRI);
    printf("SATURDAY : %d\n", SAT);
    printf("SUNDAY : %d\n", SUN);
}