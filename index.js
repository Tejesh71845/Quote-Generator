const text = document.getElementById("quote");
const author = document.getElementById("author");

const tweetButton=document.getElementById("tweet");
const getNewQuote = async () => {
  //api for quotes
  var url = "https://type.fit/api/quotes";

  // fetch the data from api
  const response = await fetch(url);
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;
  if (auth == null) {
    author = "Anonymous";
  }



  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
  
  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
}
getNewQuote();
