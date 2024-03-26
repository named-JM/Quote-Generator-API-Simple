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
        const response = await fetch(url, options);
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
    }
}

document.getElementById('newBtn').addEventListener('click', fetchData);

// Fetch a quote when the page loads
fetchData();
