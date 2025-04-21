#include<stdio.h>
int main()
{
    enum days {MON=1,TUE,WED,THU,FRI,SAT,SUN};
    int day;

    printf("   monday : %d\n",MON);
    printf("  tuesday : %d\n",TUE);
    printf("wednesday : %d\n",WED);
    printf(" thursday : %d\n",THU);
    printf("   friday : %d\n",FRI);
    printf(" saturday : %d\n",SAT);
    printf("   sunday : %d\n",SUN);


    printf("Enter day number : ");
    scanf("%d",&day);

    if(day==SUN)
    {
        printf("week off");
    }
    else{
        printf("Working day");
    }
}