import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps=
  {
    country:"in",
    pageSize:10,
    category:"general",
  }
  static propTypes=
  {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  // articles=[
  //   {
  //     "source": {
  //     "id": null,
  //     "name": "New York Times"
  //     },
  //     "author": "Julian E. Barnes, Jeffrey Gettleman",
  //     "title": "Russia-Ukraine War News: Live Updates - The New York Times",
  //     "description": "American intelligence agencies said they believe Russia will step up strikes in the coming days on Ukraine’s civilian infrastructure and government buildings.",
  //     "url": "https://www.nytimes.com/live/2022/08/23/world/ukraine-russia-war-news",
  //     "urlToImage": "https://static01.nyt.com/images/2022/08/23/world/23ukraine-briefing-promo/23ukraine-briefing-promo-facebookJumbo.jpg",
  //     "publishedAt": "2022-08-23T10:38:27Z",
  //     "content": "Demonstrators in Kyiv, Ukraine, held signs last month, accusing Russia of terrorism a day after an explosion at a prison camp in Olenivka killed dozens of Ukrainian prisoners.Credit...Laura Boushnak … [+3547 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //     },
  //     "author": "Eric Levenson, Denise Royal, Sara Weisfeldt",
  //     "title": "Nikolas Cruz's defense says his brain was 'poisoned' by birth mother's addictions in death penalty trial - CNN",
  //     "description": "An attorney for Nikolas Cruz asked jurors Monday to consider the Parkland school shooter's dysfunctional family life and his serious mental health issues when they decide whether to sentence him to death.",
  //     "url": "https://www.cnn.com/2022/08/22/us/nikolas-cruz-trial-defense/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220822121839-02-parkland-cruz-court-0822.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2022-08-23T09:32:00Z",
  //     "content": "An attorney for Nikolas Cruz asked jurors Monday to consider the Parkland school shooters dysfunctional family life and his serious mental health issues when they decide whether to sentence him to de… [+8132 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //     },
  //     "author": "CNN Sport staff",
  //     "title": "Tom Brady returns to Tampa Bay Buccaneers training camp after 11-day absence - CNN",
  //     "description": "\"Missed you guys.\" Tom Brady returned to the Tampa Bay Buccaneers' training camp on Monday following an 11-day leave of absence.",
  //     "url": "https://www.cnn.com/2022/08/23/sport/tom-brady-returns-to-practice-tampa-bay-buccaneers-spt-intl/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220819085723-tom-brady-card-super-tease.jpg",
  //     "publishedAt": "2022-08-23T08:18:00Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": "al-jazeera-english",
  //     "name": "Al Jazeera English"
  //     },
  //     "author": "Al Jazeera",
  //     "title": "New Beirut port silo collapse brings back blast trauma - Al Jazeera English",
  //     "description": "Clouds of dust rise over the port after the collapse, which brought down the last of the northern block of silos.",
  //     "url": "https://www.aljazeera.com/news/2022/8/23/new-silo-collapse-in-blast-ravaged-beirut-port",
  //     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/08/2022-08-03T105211Z_1413775224_RC28OV9O54XK_RTRMADP_3_LEBANON-BLAST-INVESTIGATION.jpg?resize=1920%2C1440",
  //     "publishedAt": "2022-08-23T07:51:05Z",
  //     "content": "The northern section of the grain silos damaged two years ago by a deadly blast at the Beirut port has collapsed after warnings the structure was leaning too far to stay up.\r\nA cloud of dust rose ove… [+2097 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "reuters",
  //     "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Musk seeks documents from Jack Dorsey in fight over Twitter deal - Reuters",
  //     "description": "Billionaire entrepreneur Elon Musk is seeking documents from Twitter Inc<a href=\"https://www.reuters.com/companies/TWTR.N\" target=\"_blank\">(TWTR.N)</a> co-founder Jack Dorsey as the CEO of Tesla and SpaceX pursues his legal fight to walk away from his $44 bil…",
  //     "url": "https://www.reuters.com/legal/musk-seeks-documents-jack-dorsey-fight-over-twitter-deal-2022-08-22/",
  //     "urlToImage": "https://www.reuters.com/resizer/Y7ygkn0h6jY_tHiAGijYx4JSA28=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GTNZYH5I25METMEO352TK55TLA.jpg",
  //     "publishedAt": "2022-08-23T07:27:00Z",
  //     "content": "WILMINGTON, Del., Aug 22 (Reuters) - Billionaire entrepreneur Elon Musk is seeking documents from Twitter Inc(TWTR.N) co-founder Jack Dorsey as the CEO of Tesla and SpaceX pursues his legal fight to … [+2702 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "associated-press",
  //     "name": "Associated Press"
  //     },
  //     "author": "Sam Metz",
  //     "title": "Arizona levee breached, hiker missing after floods hit West - The Associated Press",
  //     "description": "A levee was breached Monday in a small town near the Arizona-New Mexico state line, forcing the evacuations of 60 people after a weekend of flash floods across the American Southwest that also swept away one woman who is still missing in Utah’s Zion National …",
  //     "url": "https://apnews.com/article/floods-travel-arizona-united-states-dallas-0a3bf7355a9f3726d20efe8560800af3",
  //     "urlToImage": "https://storage.googleapis.com/afs-prod/media/4d196909280840cfa2c8587b6205cab2/3000.jpeg",
  //     "publishedAt": "2022-08-23T06:52:04Z",
  //     "content": "A levee was breached Monday in a small town near the Arizona-New Mexico state line, forcing the evacuations of 60 people after a weekend of flash floods across the American Southwest that also swept … [+4980 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "Ford to layoff 3000 employees in US, Canada, India to get competitive in electric vehicle market - WION",
  //     "description": "Ford plans to cut 3,000 jobs across the US, Canada and India, the automaker said in a letter to employees, describing the reductions as part of a \"reshaping\"...",
  //     "url": "https://www.youtube.com/watch?v=9P-7R5v8hZw",
  //     "urlToImage": "https://i.ytimg.com/vi/9P-7R5v8hZw/maxresdefault.jpg",
  //     "publishedAt": "2022-08-23T06:12:47Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "CBS Sports"
  //     },
  //     "author": "Jared Dubin",
  //     "title": "Jets vs. Falcons score, takeaways: Marcus Mariota, Desmond Ridder sharp for Atlanta in defeat - CBS Sports",
  //     "description": "New York and Atlanta cap Week 2 of the preseason",
  //     "url": "https://www.cbssports.com/nfl/news/jets-vs-falcons-score-takeaways-marcus-mariota-desmond-ridder-sharp-for-atlanta-in-defeat/live/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/08/23/a047c5cf-89a2-46c2-96e8-7bfa4bf16309/thumbnail/1200x675/2fc475d77f32f9bd1a0ffb1f17939d41/marcus-mariota.jpg",
  //     "publishedAt": "2022-08-23T06:11:00Z",
  //     "content": "The New York Jets topped the Atlanta Falcons, 24-16, in the final game of preseason Week 2. \r\nAtlanta took a 16-0 lead in the first half behind efficient performances from both Marcus Mariota (6 of 1… [+2967 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "CNBC"
  //     },
  //     "author": "Samantha Subin",
  //     "title": "Stock futures inch higher after major averages notch worst day since June - CNBC",
  //     "description": "Stock futures inched higher early morning Tuesday after stocks finished their worst day since June and Wall Street's summer rally faded amid rate hike concerns.",
  //     "url": "https://www.cnbc.com/2022/08/22/stock-futures-inch-higher-after-major-averages-notch-worst-day-since-june.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107099146-NYSE-Trading-Floor-OB-Photo-220804-CC-PRESS-1.jpg?v=1659639387&w=1920&h=1080",
  //     "publishedAt": "2022-08-23T04:58:00Z",
  //     "content": "Stock futures inched higher early morning Tuesday after stocks finished their worst day since June and Wall Street's summer rally faded amid mounting rate hike concerns.\r\nFutures tied to the Dow Jone… [+1543 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "BBC News"
  //     },
  //     "author": "https://www.facebook.com/bbcnews",
  //     "title": "James Webb: Space telescope reveals 'incredible' Jupiter views - BBC",
  //     "description": "The James Webb Space Telescope shows the planet's auroras and storms in an unprecedented detail.",
  //     "url": "https://www.bbc.com/news/science-environment-62641866",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11757/production/_126411517_jupiter.png",
  //     "publishedAt": "2022-08-23T03:21:50Z",
  //     "content": "The world's largest and most powerful space telescope has revealed unprecedented views of Jupiter. \r\nThe James Webb Space Telescope (JWST) took the pictures of the Solar System's biggest planet in Ju… [+1621 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "New York Post"
  //     },
  //     "author": "Ryan Dunleavy",
  //     "title": "Giants' training camp surprise Darrian Beavers out for season with torn ACL - New York Post ",
  //     "description": "At least six members of the Giants’ 11-player 2022 draft class are dealing with injuries serious enough to miss practices.",
  //     "url": "https://nypost.com/2022/08/22/giants-darrian-beavers-out-for-season-with-torn-acl/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/darrian-beavers-giants-acl-injury.jpg?quality=75&strip=all&w=1024",
  //     "publishedAt": "2022-08-23T03:18:00Z",
  //     "content": "A torn ACL giveth, a torn ACL taketh away.\r\nThe cruel reality of football set in Monday when Giants rookie inside linebacker Darrian Beavers who was one of the pleasant surprises of training camp ste… [+2632 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //     },
  //     "author": "Steve Contorno",
  //     "title": "Florida Democrats to decide Tuesday who would be best to take abortion fight to DeSantis - CNN",
  //     "description": "On this, the Democratic candidates for Florida governor agree: New restrictions on abortion in the Sunshine State and uncertainty about the future of women's health across America have reinvigorated their voters and elevated the urgency to their effort to kno…",
  //     "url": "https://www.cnn.com/2022/08/22/politics/florida-democratic-governor-primary/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220822121333-crist-fried-split.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2022-08-23T03:14:00Z",
  //     "content": "On this, the Democratic candidates for Florida governor agree: New restrictions on abortion in the Sunshine State and uncertainty about the future of womens health across America have reinvigorated t… [+8591 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "KOCO Oklahoma City"
  //     },
  //     "author": "KOCO Staff",
  //     "title": "Suspect accused of shooting, killing Oklahoma County deputy has been identified - KOCO Oklahoma City",
  //     "description": "The suspect accused of shooting and killing a deputy in Oklahoma County has been identified.",
  //     "url": "https://www.koco.com/article/oklahoma-county-deputies-shot-suspect-identified/40962474",
  //     "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/benjamin-plank-1661222582.gif?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  //     "publishedAt": "2022-08-23T03:13:00Z",
  //     "content": "OKLAHOMA COUNTY, Okla. —The suspect accused of shooting and killing a deputy in Oklahoma County has been identified.\r\nOn Monday, KOCO 5 learned more about the suspect in the shooting.\r\nBenjamin Plank… [+324 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //     },
  //     "author": "Tim Lister, Uliana Pavlova, Lauren Said-Moorhouse",
  //     "title": "Russian security service accuses Ukraine of Darya Dugina's murder - CNN",
  //     "description": "Russia has blamed Ukrainian special services for the murder of Darya Dugina, a Russian political commentator and the daughter of prominent ultranationalist ideologue Alexander Dugin, according to Russian state news agency TASS.",
  //     "url": "https://www.cnn.com/2022/08/22/europe/darya-dugina-killing-russian-security-service-claim-intl/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220821023412-02-darya-dugina-car-crash-alexander-dugin-russia.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2022-08-23T02:30:00Z",
  //     "content": "Russia has blamed Ukrainian special services for the murder of Darya Dugina, a Russian political commentator and the daughter of prominent ultranationalist ideologue Alexander Dugin, according to Rus… [+4456 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //     },
  //     "author": "Ashley Strickland, CNN",
  //     "title": "Artemis I is go for launch to the moon and back, NASA says - CNN",
  //     "description": "Managers of the Artemis I mission at NASA have concluded that the Space Launch System rocket and Orion spacecraft are ready to launch on Monday, August 29.",
  //     "url": "https://www.cnn.com/2022/08/22/world/nasa-artemis-1-launch-update-scn/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220817091108-artemis-i-mega-rocket-nasa-super-tease.jpg",
  //     "publishedAt": "2022-08-23T02:30:00Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "The A.V. Club"
  //     },
  //     "author": "Sam Barsanti",
  //     "title": "Latest string of HBO Max cancellations includes Batman: Caped Crusader, but it might not be dead yet - The A.V. Club",
  //     "description": "The animated series came from Matt Reeves, J.J. Abrams, and Batman: The Animated Series co-creator Bruce Timm",
  //     "url": "https://www.avclub.com/hbo-max-cancels-batman-caped-crusader-matt-reeves-timm-1849444222",
  //     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7bc526f2c367dbb8cbf94d5573e6843b.jpg",
  //     "publishedAt": "2022-08-23T02:17:00Z",
  //     "content": "Its a day that ends in a Y, which means its time for Warner Bros. Discover to kill off some more projects that were already in development for HBO Max, andwow, would you believe this?theyre all anima… [+2202 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "New York Post"
  //     },
  //     "author": "Natalie O'Neill",
  //     "title": "Mystery virus kills dozens of dogs -- mostly puppies -- in Michigan - New York Post ",
  //     "description": "A mystery virus has sickened and killed dozens of dogs in Michigan — sparking panic among animal lovers, officials said Monday.",
  //     "url": "https://nypost.com/2022/08/22/mystery-virus-kills-dozens-of-dogs-in-michigan/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/puppy.jpg?quality=75&strip=all&w=1024",
  //     "publishedAt": "2022-08-23T02:01:00Z",
  //     "content": "A mystery virus has sickened and killed dozens of dogs in Michigan sparking panic among animal lovers, officials said Monday.\r\nThe unidentified illness, which causes acute gastrointestinal problems, … [+1298 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": "the-washington-post",
  //     "name": "The Washington Post"
  //     },
  //     "author": "Antonio Olivo",
  //     "title": "Pentagon again denies Bowser request for National Guard help for migrants - The Washington Post",
  //     "description": "In a letter to the D.C. mayor, the Pentagon's executive secretary reiterated a host of reasons why National Guard troops could not be deployed.",
  //     "url": "https://www.washingtonpost.com/dc-md-va/2022/08/22/bowser-migrant-national-guard-denial/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2U5Z5RQTKUI63BECA3A4QTHI6I.jpg&w=1440",
  //     "publishedAt": "2022-08-23T00:58:00Z",
  //     "content": "Comment on this story\r\nThe Defense Department onMonday againsaid it will not help the District deal with the thousands of migrants who have arrived on buses from Texas and Arizona, upholding the depa… [+3698 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "KTVU San Francisco"
  //     },
  //     "author": "Henry Lee",
  //     "title": "Dentist killed in attempted robbery in Oakland's Little Saigon - KTVU FOX 2 San Francisco",
  //     "description": "A woman was shot and killed after parking in Oakland's Little Saigon in what police described as an attempted robbery.",
  //     "url": "https://www.ktvu.com/news/dentist-killed-in-attempted-robbery-in-oaklands-little-saigon",
  //     "urlToImage": "https://images.foxtv.com/static.ktvu.com/www.ktvu.com/content/uploads/2022/08/1280/720/Dr.-lili.jpg?ve=1&tl=1",
  //     "publishedAt": "2022-08-23T00:49:33Z",
  //     "content": "OAKLAND, Calif. - A woman was shot and killed after parking in Oakland's Little Saigon in what police described as an attempted robbery.\r\nDr. Lili Xu, 60, a dentist in Oakland's Chinatown, was attack… [+1843 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "San Francisco Chronicle"
  //     },
  //     "author": "Mallory Moench",
  //     "title": "Gavin Newsom vetoes supervised drug consumption sites in SF, LA - San Francisco Chronicle",
  //     "description": "Gov. Gavin Newsom vetoed a bill that would have allowed pilot programs where people could...",
  //     "url": "https://www.sfchronicle.com/bayarea/article/Gov-Newsom-vetoes-bill-allowing-supervised-drug-17390653.php",
  //     "urlToImage": "https://s.hdnux.com/photos/01/24/12/65/22064456/12/rawImage.jpg",
  //     "publishedAt": "2022-08-23T00:45:14Z",
  //     "content": "Gov. Gavin Newsom vetoed a bill that would have allowed pilot programs where people could use drugs under the supervision of trained staff in San Francisco, Oakland and Los Angeles, a blow to a long-… [+7968 chars]"
  //     }
  // ]
capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}
  constructor(props)
  {
    super(props);
    // console.log("Hello I am constructor of news component.")
    this.state=
    {
      // articles: this.articles,
      
      articles:[],
      loading:false,
      page:1,
    }
    document.title=`NewsWorld-${this.capitalizeFirstLetter(this.props.category)}`;
  }
  // async updateNews()
  // {
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3594993a086546d08df1e7c6a2bd2db0&page=${this.state.page}&pageSize=${this.props.pageSize} `;
  //   this.setState({loading:true});
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   this.setState({articles:parsedData.articles,
  //   loading:false});
  // }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3594993a086546d08df1e7c6a2bd2db0&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
    loading:false});
    // this.updateNews();
  }
  handlePrevClick=async ()=>
  {
  //   console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3594993a086546d08df1e7c6a2bd2db0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
    page: this.state.page-1,
    articles:parsedData.articles,
    loading:false
   })
      // this.setState({page:this.state.page-1});
      // this.updateNews();

  }
  handleNextClick= async ()=>
  {
    // console.log("NEXT");
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3594993a086546d08df1e7c6a2bd2db0&page=${this.state.page + 1}&pageSize=${this.props.pageSize} `;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        page: this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })
    }   
      // this.setState({page:this.state.page+1});
      // this.updateNews();

          
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="row">
         <h3 className="text-center mb-4" >NewsWorld- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
         {this.state.loading && <Spinner/>}
         {!this.state.loading && this.state.articles.map((element)=>{

           return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary my-3" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary my-3" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
