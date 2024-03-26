async function fetchData() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2543d99c85msh29c1dca6afd43eap1b84e4jsnbd18b03a0634',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    try {

        //here need to intialize and fetch data  before respnise so it wont get error
        const response = await fetch(url, options);

        if (!response.ok) {
            if (response.status === 429) {
                throw new Error('Too many requests. Please try again later.');
            } else {
                throw new Error('Network response was not ok');
            }
        }

        
        const result = await response.json();
        const quoteContent = result.content;
        const quoteAuthor = result.originator.name;
        console.log(result);
        console.log(quoteContent);
        console.log(quoteAuthor);
        
        const quoteContainer = document.getElementById('quote-content');
        const author = document.getElementById('author');

        quoteContainer.textContent = quoteContent;
        author.textContent = "- " + quoteAuthor;
        
    } catch (error) {
        console.error(error);
        const quoteContainer = document.getElementById('quote-content');
        quoteContainer.textContent = 'Failed to fetch a quote. ' + error.message;
    }
}

document.getElementById('newBtn').addEventListener('click', fetchData);

// Fetch a quote when the page loads
fetchData();


