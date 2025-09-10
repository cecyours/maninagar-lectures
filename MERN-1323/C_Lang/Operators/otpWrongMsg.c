#include <stdio.h>
#include <conio.h>

void main()
{
    int hardCodedOTP = 2345, otp;

    printf("Please enter the OTP : \n");
    scanf("%d", &otp);

    if(!(otp == hardCodedOTP))
    {
        printf("\nInvalid OTP!");
        exit(0);
    }

    printf("Welcome... %d", otp);

}