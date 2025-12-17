#include<stdio.h>

void main() {
    enum day{MON = 1, TUE, WED, THU= 101, FRI, SAT, SUN};

    printf("MONDAY: %d\n", MON);
    printf("TUESDAU: %d\n", TUE);
    printf("WEDNESDAY: %d\n", WED);

    printf("THURSDAY: %d\n", THU);
    printf("FRIDAY: %d\n", FRI);
    printf("SATURDAY: %d\n", SAT);
    printf("SUNDAY: %d\n", SUN);
    
}