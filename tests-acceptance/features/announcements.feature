Feature: Manager Announcements


Scenario: Register Announcements
Given I am at the home page
When I try fill username with "admin" and  password with "admin"
Given I can see menu with announcements 
When I try insert announcements
When I can fill title with "FACEPE" objective with "INOVAR" fomentation with "300" category with "Educacao" date Submission with "22/10/2020" and url with "www.google.com"
Then I can see title with "FACEPE" objective with "INOVAR" fomentation with "300" category with "Educacao" date Submission with "22/10/2020" and url with "www.google.com" 