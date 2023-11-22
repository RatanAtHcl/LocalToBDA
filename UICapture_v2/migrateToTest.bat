#DENIZ - concats the built js and config files and copies over to the test website directory

copy build\discoverui.concat.js + defaultconfiguration.js discoveruiSDK.js
move discoveruiSDK.js test\webdriver\testwebsite\js\
