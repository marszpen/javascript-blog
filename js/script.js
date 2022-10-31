{
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';
    optTagsListSelector = '.tags .list';
    optCloudClassCount = 5;
    optCloudClassPrefix = 'tag-size-';
    const optAuthorsListSelector = '.authors.list';

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

  const calculateTagsParams = function(tags){
    const params = {
    max: 0,
    min: 99999,
    return: params,
  }

    for(let tag in tags){
    params.max = Math.max(tags[tag], params.max);
    params.min = Math.min(tag[tag], params.min);
      console.log(tag+ ' is used ' + tags[tag] + ' times');
    }
  }

  const calculateTagClass = function (count, params){
   // 2-6
    const normalizedCount = count - params.min;
    // 10-2
    const normalizedMax = params.max - params.min;
    // 4/8
    const percentage = normalizedCount / normalizedMax;
    // 1*4+1
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
    return optCloudClassPrefix + classNumber;
  }

  function generateTags() {
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
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
    /* [NEW] check if this link is NOT already in allTags */
    if(!allTags[tag]){
    /* [NEW] add generated code to allTags array */
    allTags[tag] = 1;
    } else {
    allTags[tag]++;
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);

    /* [NEW] create variable for all links HTML code */
    const tagsParams = calculateTagsParams(allTags);
      console.log('tagsParams:', tagsParams)
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += tagLinkHTML;
    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
    }
  }

}
generateTags();

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
  
    generateAuthors()