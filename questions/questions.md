*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  



*Answer 1:*

Hello Marissa,

We appreciate your valuable feedback. That allows us to enhance our services.
We generally make updates and new features based on insights and feedback from our customers or for security and performance reasons.

I will raise your feedback to our product team.
 
As mentioned in our documentation, deletion may not be your only option. If you want to reduce your usage, remove the records from an index (clear it) through either the dashboard’s Indices section or the API.
In addition, our API offers - the possibility to automate repetitive actions.
We can have a quick call to give you more details if you are available.
 
Best regards,
Abir



  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   


*Answer 2:*

Dear Carrie,

We apologize for the inconvenience and the errors you are encountering. I understand your frustration.
 
This error occurs when you reach the size limits of a record. Algolia set these limits for performance reasons.
 
You can find below the size limits related to your plan:
	• For Standard and Premium plans: 
		○ 100 KB for any individual record
		○ 10 KB average record size across all records
	• For legacy plans (before July 1, 2020): 
		○ 10 KB for Pro, Starter, or Free accounts
		○ 20 KB for Essential and Plus
		○ Business and Enterprise accounts have a 100 KB customizable limit.
 
You can find more details in our documentation:

https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/index-and-records-size-and-usage-limitations/

I also share with you this link that describes techniques to help you break up your records into smaller ones if needed:

https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/

We can set a meeting to give you more details for more information.

The satisfaction of our customers is a priority. Please feel free to contact me if needed.

Best regards,
Abir



  
--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  


*Answer 3:*

Hi Marc,

As I can see in the logs the variable "searchkit" is used but is not defined.

Could you please check that this variable is declared and initialized ?

Also, could you please share with me more details about this error:
	- Your code
	- Your Algolia username and the application name you are using.

Thanks in advance

Best regards,
Abir


