#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char s[5000];
int m[20000]={32},L=1,I,T[500],*S=T,t=64,w,f;

void a(int x)
{
   m[m[0]++] = L;
   L= *m-1;
   m[m[0]++] = t;
   m[m[0]++] = x;
   scanf("%s",s+t);
   t+=strlen(s+t)+1;
}

void r(int x)
{
   switch(m[x++]){
 ;break;case 5: for(w=scanf("%s",s)<1?exit(0),0:L;strcmp(s,&s[m[w+1]]);w=m[w]);
  w-1 ? r(w+2) : (m[m[0]++] = 2,m[m[0]++] = atoi(s))
 ;break;case 12: I=m[m[1]--]
 ;break;case 15: f=S[-f]
 ;break;case 1: m[m[0]++] = x
 ;break;case 9: f *=* S--
 ;break;case 7: m[f]= *S--;
  f= *S--
 ;break;case 0: *++S=f;
  f=m[I++]
 ;break;case 8: f= *S --- f
 ;break;case 2: m[++m[1]]=I;
  I=x
 ;break;case 11: f=0>f
 ;break;case 4: *m-=2;m[m[0]++] = 2
 ;break;case 6: f=m[f]
 ;break;case 10: f= *S--/f
 ;break;case 3: a(1);
  m[m[0]++] = 2
 ;break;case 13: putchar(f);
  f= *S--
 ;break;case 14: *++S=f;
  f=getchar();
   }
}

void main()
{
   a(3);
   a(4);
   a(1);
   w= *m;
   m[m[0]++] = 5;
   m[m[0]++] = 2;
   I= *m;
   m[m[0]++] = w;
   m[m[0]++] = I-1;
   for(w=6;w<16;)
      a(1),m[m[0]++] = w++;
   m[1]= *m;
   for(*m+=512;;r(m[I++]));
}
