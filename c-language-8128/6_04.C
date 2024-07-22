#include<stdio.h>
#include<conio.h>
#include<string.h>
void main()
{
	char str1[] = "Hello World",str2[100] = "Python",str3[100];
	char *ptr;
	clrscr();


	 strcat(str1,str2); // str1 = str1+str2

	printf("concat : %s\n",str1);

	strcpy(str3,str1);
	printf("copy : %s\n",str3);

	printf("compare : %d \n",strcmp(str3,str1));
	printf("compare : %d \n",strcmp(str2,str1));

      ptr= strchr(str1,'e');

      if(ptr!=NULL)
      {
	printf("Character found %p, %c\n",ptr,*ptr);
      }

      ptr = NULL;

      ptr = strstr(str1,"Hell");

      if(ptr!=NULL)
      {
	printf("String found %p, %c\n",ptr,*ptr);
      }

      printf("String 2 : %s\n",str2);
      printf("String reverse : %s\n",strrev(str2));

      strset(str2,'-');

      printf("string set : %s\n",str2);

	getch();

}