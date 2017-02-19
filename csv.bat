cd "C:\Users\Accounting\Downloads\fwdonline"
C:
mkdir utf8
FOR %%i IN (*) DO "iconv" -f windows-874 -t UTF-8 %%i > utf8/%%i
C: