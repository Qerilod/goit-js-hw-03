function slugify(title) {
    const lowerTitle = title.toLowerCase().replace ((/ /g), '-');
    return lowerTitle;
}
// const lowerTitle = title.toLowerCase().replace ('-'); - цей варіант не працює, тому що "((/ /g)" це прибирання символів і їхня заміна на "-"?
// і чи потрібно використовується щось типу  ".replace(/[^\w-]+/g, '')" для прибирання інших, чи це залежить від ситуації?
 

 console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
 console.log(slugify("English for developer")); // "english-for-developer"
 console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
 console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks" 


 