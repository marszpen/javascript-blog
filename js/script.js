{
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){
    console.log('well done + add generateTitleLinks function')
  /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector)
        titleList.innerHTML = html;

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    /* find all the articles and save them to variable: articles */
    let html = '';

  for(let article of articles){

    /* get the article id */
    const articleId = article.getAttribute('id');
        console.log(articleId);
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);
    /* insert link into titleList */
    html = html + linkHTML;

    console.log(linkHTML);
  }
  titleList.innerHTML= html;
}
generateTitleLinks()
   
  
    //
    const titleClickHandler = function(event){
        event.preventDefault();
        const clickedElement = this;
        
        console.log('Link was clicked');
    
      /* remove class 'active' from all article links  */
         const activeLinks = document.querySelectorAll('.titles a.active');
    
         for(let activeLink of activeLinks){
           activeLink.classList.remove('active');
         }
      /* add class 'active' to the clicked link */
         clickedElement.classList.add('active')
            console.log('clickedElement:', clickedElement);
      /* remove class 'active' from all articles */
            const activeArticles = document.querySelectorAll('article');
        
            for (let activeArticle of activeArticles){
                activeArticle.classList.remove('active');
            }
      /* get 'href' attribute from the clicked link */
            const articleSelector = clickedElement.getAttribute('href');
                console.log(articleSelector);
      /* find the correct article using the selector (value of 'href' attribute) */
            const targetArticle = document.querySelector(articleSelector);
            console.log(targetArticle);
      /* add class 'active' to the correct article */
            targetArticle.classList.add('active');
      }
      
      const links = document.querySelectorAll('.titles a');
        console.log(links);
     
      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }
  
      function generateTags(){
        /* find all articles */
        const articles = document.querySelectorAll(optArticleSelector);
        /* START LOOP: for every article: */
            for(let article of articles){
          /* find tags wrapper */
        const tagsWrapper = article.querySelector(optArticleSelector);
              console.log(tagsWrapper)
          /* make html variable with empty string */
        let html = '';
          /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
          console.log(articleTags);
          /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
            console.log(articleTagsArray);
          /* START LOOP: for each tag */
            for(let tag of articleTagsArray){
              console.log(tag);
            /* generate HTML of the link */
            const titleList = document.querySelector(optTitleListSelector)
            titleList.innerHTML = html;
            /* add generated code to html variable */
            const linkTitle = links.querySelector(optTitleSelector).innerHTML;}
          /* END LOOP: for each tag */
          const linkHTML = '<li><a href="#' + tag- + '"><span>' + linkTitle + '</span></a></li>';
          console.log(linkHTML);
          /* insert HTML of all the links into the tags wrapper */
      
        /* END LOOP: for every article: */
      
            }
          }
          titleList.innerHTML= html;
        }
    generateTags();
  