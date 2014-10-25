In this lab you'll access the Rotten Tomatoes service to search English movies. As the service is not accessible I've created a folder called movies with json files. Each file contains the response that you'll get for a particular movie. 
So you'll have to search from the following list.

Jaws
Titanic
Ocean's Eleven
The Departed
Forrest Gump
The Jurrasic Park

Each movie is mapped to one file in the server. You can maintain the mappings in an array.
When the user enters a movie and clicks search you find out the file you need to request and send an AJAX request to that file. Get the JSON contents and display.

In the JSON response you get, say response, you'll need to access
response.movies (an Array that gives the list of all movies).
Each movie object in that array gives you the properties to access the title, poster, cast ..etc. Write a console.log of the movie object and study the properties.

If I click the back button the previous search results should be displayed.

Create a page movies.html
Add angularjs script(s)
Create a page as shown in image 01.png.


If the Rotten Tomatoes service works
you will send a JSONP request to 

http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q=Titanic

You can replace the movie at appropriate place in the URL.



