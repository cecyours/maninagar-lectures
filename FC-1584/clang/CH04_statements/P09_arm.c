#include<stdio.h>
#include<math.h>

int main(){

    int num, temp, digits=0, rem, arm=0;

    printf("Enter the number :");
    scanf("%d", &num);

    temp = num;

    while (temp > 0)
    {
        /* code */
        digits++;
        temp /=10;
    }

    temp = num;

    while (num > 0)
    {
        /* code */
        rem = num%10;
        arm = arm+pow(rem,digits);
        num = num/10;
    }

    if(temp == arm) {
        printf("%d is an armstrong number.\n", temp);
    }else {
        printf("%d is not an armstrong number.\n", temp);
    }
    
    return 0;
}