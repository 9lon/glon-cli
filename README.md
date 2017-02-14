Prereq
#1 Install chocolatey
open cmd.exe and run  as admin
# @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

#2 choco install jdk8
#3 choco install nodejs.install
#4 choco install git.install
#5 npm install -g bower

How to install  nylon-cli
open cmd.exe or powsershell

#1 npm install -g nylon-cli
#2 mkdir {app-name}
#3 cd {app-name}
#4 npm init
#5 nylon-cli init
#6 cd public
#7 bower install
#8 cd ..
#9 nylon-cli serve