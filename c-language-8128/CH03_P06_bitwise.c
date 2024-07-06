#include <stdio.h>
void main()
{
    int a = 7, b = 2, c;

    c = a & b; // bitwise &

    printf("%d & %d = %d\n", a, b, c);

    /*
        7 => 0 1 1 1
        2 => 0 0 1 0
        --------------
        & => 0 0 1 0 => 2
     */

    c = a | b; // bitwise OR

    printf("%d | %d = %d\n", a, b, c);

    /*
        7 => 0 1 1 1
        2 => 0 0 1 0
        -------------
        | => 0 1 1 1 => 7
     */

    c = a ^ b; // bitwse Ex-or
    printf("%d ^ %d = %d\n", a, b, c);

    /*
      7 => 0 1 1 1
      2 => 0 0 1 0
      -------------
      ^ => 0 1 0 1 => 5
   */

    c = a >> b; // left shift
    printf("%d >> %d = %d\n", a, b, c);

    /*
        c = a/2^b
          = 7/2^2
          = 7/4 = 1
    */

    c = a << b; // right shift
    printf("%d << %d = %d\n", a, b, c);

    /*
         c = a*2^b
           = 7*2^2
           = 7*4 = 28
     */
}