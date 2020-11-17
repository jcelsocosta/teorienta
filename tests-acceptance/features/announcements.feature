Feature: Manager Announcements


Scenario: Register Announcements
Given I am at the home page
When I try fill username with "admin" and  password with "admin"
Given I can see menu with announcements 
When I try insert announcements

