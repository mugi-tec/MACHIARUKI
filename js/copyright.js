// JS Information ======================================================
// Site URL:http://machiaruki.com/
// File name:copyright.js
// Summary:西暦自動繰上
// Created:2020-11-10
// Last update:2020-11-10 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

myD = new Date();
myYear = myD.getYear();
myYears = (myYear < 2000) ? myYear+1900 : myYear;
document.write("&copy; 2009-",myYears," BUNKASOZOSHA Co.,Ltd.");
