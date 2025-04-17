/**
 * this is document section which explains the purpose or details about the program
  */

#include<stdio.h> // link section

#define PI 3.14 // defination section

#define max(a,b) (a>b) ? a : b // defination section
/**
 * turnary operator
 * 
 * (condition) ? expression1 : expression2
 * 
 * */

#define sum(a,b) a+b

int roll_no = 30; //global declaration section

void display() // user define section
{
    printf("hello %d, how are you !!",roll_no);
}

int  main() //main section
{
    int ans,m;

    ans = sum(9,10);

    m = max(ans,PI);

    printf("the details : ans = %d\n",ans);
    printf("max = %d\n",m);
    roll_no=21;
    display(); // user define function
    return 0;
}



 