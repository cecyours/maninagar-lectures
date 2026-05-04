#include<stdio.h>
#include<math.h>

int main(){

    int num, temp, digits=0, rem, arm=0;

    printf("Enter the number :");
    scanf("%d", &num);

    temp = num;

    // Handle 0 case
    if (temp == 0) {
        digits = 1;
    } else {
        while (temp > 0)
        {
            digits++;
            temp /= 10;
        }
    }

    temp = num;

    while (num > 0)
    {
        rem = num % 10;   
        arm = arm + (int)pow(rem, digits);
        num = num / 10;
    }

    if(temp == arm) {
        printf("%d is an armstrong number.\n", temp);
    } else {
        printf("%d is not an armstrong number.\n", temp);
    }
    
    return 0;
}