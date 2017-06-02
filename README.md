# Gousto Tech Test

Add below commands to terminal in order to download the repo, install related packages and run the server

	$ git clone https://github.com/ercekal/gousto_tt
	$ cd gousto_tt
	$ npm install
	$ npm start

In order to access Gousto API you should have Allow-Control-Allow-Origin app installed from Chrome store (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

After the server runs properly run
	$ open http://localhost:8080/webpack-dev-server/

The categories component fetches the category titles and all items via using axios package.

When you click on one of the item categories the selected category becomes bold and related items are rendered below the search box by filtering the ones that have the selected category.

If a item is clicked it becomes bold and opens the item description below. Multiple item descriptions can be seen.

After a category is selected and related items are listed if a search term is entered to search box input, it filters the title & description of the listed items and shows the ones that include that term.
