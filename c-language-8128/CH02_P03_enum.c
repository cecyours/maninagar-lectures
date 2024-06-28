#include<stdio.h>
void main()
{
    enum day {MON,TUE, WED=400,THU, FRI, SAT=30, SUN};



    printf("The day code \n");

    printf("   MONDAY : %d\n",MON);
    printf("  TUESDAY : %d\n",TUE);
    printf("WEDNESDAY : %d\n",WED);
    printf(" THURSDAY : %d\n",THU);
    printf("   FRIDAY : %d\n",FRI);
    printf(" SATURDAY : %d\n",SAT);
    printf("   SUNDAY : %d\n",SUN);

 
}