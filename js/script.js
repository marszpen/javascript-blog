{
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(customSelector = '') {
    console.log(customSelector)
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector)
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    /* find all the articles and save them to variable: articles */
    let html = '';

    for (let article of articles) {

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
    titleList.innerHTML = html;
  }
  generateTitleLinks()


  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    console.log('Link was clicked');

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active')
    console.log('clickedElement:', clickedElement);
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article');

    for (let activeArticle of activeArticles) {
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

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

  function generateTags() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        /* generate HTML of the link */ 
        const linkHTML = '<li><a href="#' + tag + '"><span>' + tag + '</span></a></li> ';
        html += linkHTML;
      }
     
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      /* END LOOP: for every article: */

    }
  }

}
generateTags();;

{
    function tagClickHandler(event){
      /* prevent default action for this event */
      event.preventDefault();
      /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
      /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
      /* find all tag links with class active */
    const tagLinks = tag.querySelectorAll('a.active[href^="#tag-"]')
      /* START LOOP: for each active tag link */
      for(let tags of tagLinks){
        /* remove class active */
        const tagLinks = document.querySelectorAll('a.active');
    
        for(let tagLink of tagLinks){
          tagLink.classList.remove('active');}
        
      /* END LOOP: for each active tag link */
        }
        tagLinks.innerHTML = html;
      /* find all tag links with "href" attribute equal to the "href" constant */
        const hrefLinks = document.querySelectorAll('a[href="' + href + '"]');
      /* START LOOP: for each found tag link */
          for (let tagLink of hrefLinks){
        /* add class active */
        tagLink.classList.add('active');
      /* END LOOP: for each found tag link */
          }
      tagLinks.innerHTML= html;
      /* execute function "generateTitleLinks" with article selector as argument */
      generateTitleLinks('[data-tags~="' + tag + '"]');
    }
}
    
    
    function addClickListenersToTags(){
      /* find all links to tags */
      const tagLinks = document.querySelectorAll('a[href^="#tag-"]')
      /* START LOOP: for each link */
        for (let tagLink of tagLinks) {
        /* add tagClickHandler as event listener for that link */
          tagLink.addEventListener('click', tagClickHandler);
      /* END LOOP: for each link */
        }
        
    }

    
    addClickListenersToTags();

    function generateAuthors() {
      /* find all articles */
      const articles = document.querySelectorAll(optArticleSelector);
      console.log(articles);
      /* START LOOP: for every article: */
      for (let article of articles) {
        /* find author wrapper */
        const authorWrapper = article.querySelector(optArticleAuthorSelector);
        console.log('authorWrapper:', authorWrapper);
        /* make html variable with empty string */
        let html = '';
        /* get Author from data-author attribute */
        const articleAuthor = article.getAttribute('data-author');
        console.log('articleAuthor:', articleAuthor);
        /*  generate HTML of the link */
        const authorHTMLData = { author: articleAuthor };
        const authorHTML = templates.authorLink(authorHTMLData);
        /* add generated code to html variable */
        html += authorHTML;
        /* insert HTML of all the links into the authors wrapper */
        authorWrapper.innerHTML = html;
        console.log('html:', html);
        /* END LOOP: for every article: */
      }
      authorWrapper.innerHTML = html;
    
    }
    generateAuthors();