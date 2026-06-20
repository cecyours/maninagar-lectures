#include <stdio.h>

void display()
{
    printf("Hello World\t");
    display(); /** recursion calling **/
}
void main()
{
  
    display();
   
}