#include <stdio.h>
int main()
{
    const float OTP = 871199;

    float user_otp;

    printf("Enter The OTP : ");
    scanf("%f", &user_otp);

    if (!(user_otp == OTP))
    {
        printf("Something Went Wrong");
        // exit(0)
    }
    else
    {
        printf("Welcome Goa Singhum.... ");
    }

    return 0;
}
