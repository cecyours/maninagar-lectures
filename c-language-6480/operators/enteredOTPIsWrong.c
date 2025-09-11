#include <stdio.h>

void main()
{
    const int preDefinedOTP = 9870;
    int userOTP;
    
    printf("Enter the OTP :\n");
    scanf("%d", &userOTP);

    if(!(userOTP == preDefinedOTP))
    {
        printf("Invalid OTP");
        exit(0);
    }

    printf("Welcome %d User", userOTP);
}