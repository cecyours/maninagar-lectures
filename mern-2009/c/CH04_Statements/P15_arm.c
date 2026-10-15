#include<stdio.h>

int main() {
    int num, temp, degits = 0, rem, arm = 0;

    printf("Enter the number:");
    scanf("%d", &num);

    temp = num;

    do
    {
        /* code */
        degits++;
        temp /= 10;
    } while (temp != 0);

    temp = num;

    do
    {
        /* code */
        rem = num % 10;

        int power = 1;
        for (int i = 0; i < degits; i++)
        {
            /* code */
            power *= rem;
        }
        
        arm += power;
        num /= 10;

    } while (num != 0);

    if (temp == arm)
    {
        /* code */
        printf("%d is an Armstring number\n", temp);
    }else {
        printf("%d is not an armstrong number\n",temp);
    }
    
    
    
}