<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/main.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/normalize.css">
    <!-- <link rel="stylesheet" href="bootstrap-3.3.6-dist/css/bootstrap.min.css"> -->
    <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
    <title>Floresco</title>
</head>

<body>
    <input type="checkbox" id="nav-trigger" class="nav-trigger" />
    <label for="nav-trigger"></label>
    <header class="site-header cf">
        <ul class="market-summary">
            <li class="market-charts">FTSE 100</li>
            <div class="chart-placeholder"></div>
            <li class="market-charts">UK 10Yr Bond</li>
            <div class="chart-placeholder"></div>
            <li class="market-charts">GBP:USD</li>
            <div class="chart-placeholder"></div>
            <li class="market-charts">Oil</li>
            <div class="chart-placeholder"></div>
            <li class="market-charts">Gold</li>
            <div class="chart-placeholder"></div>
        </ul>
        <h1 class="small-logo cf">Floresco</h1>
        <nav class="site-nav">
            <ul class="navigation">
                <li><a href="#">About Floresco</a></li>
                <li><a href="#">Our Features</a></li>
                <li><a href="#">The Investment Platform</a></li>
                <li><a href="#">Market Research</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
        <nav class="main-nav">
            <ul class="primary-nav">
                <li class="nav-profile"><a href="#">Your profile</a></li>
                <li class="nav-blog"><a href="#">Your blog</a></li>
                <li class="nav-portfolio"><a href="#">Portfolio analytics</a>
                    <!-- the below should be a sub-list -->
                    <ul>
                        <li><a href="#">Equities</a></li>
                        <li><a href="#">Bonds</a></li>
                        <li><a href="#">Funds</a></li>
                    </ul>
                </li>
                <li class="nav-economics"><a href="#">Economics</a></li>
                <li class="nav-trading"><a href="#">Trading</a></li>
                <li class="nav-following"><a href="#">Following</a></li>
            </ul>
        </nav>
    </header>
    <site-wrap>
        <div class="profile">
            <h1><a href="#">Your profile</a></h1>
            <img src="images/profile-photo.jpg" alt="profile-photo">
            <div class="profilebox">
                <h2>Name:</h2>
                <input type="text" id="name" placeholder="User Name"></input>
                <h2>Username:</h2>
                <input type="text" id="username" placeholder="Name"></input>
                <h2>Investment style:</h2>
                <select name="Strategy" id="strategy">
                    <optgroup label="Low-risk">
                        <option value="maximum-caution">Maximum caution</option>
                        <option value="capital-preservation">Capital preservation</option>
                        <optgroup label="Medium-risk">
                            <option value="cautious">Cautious</option>
                            <option value="balanced">Balanced</option>
                            <optgroup label="Growth">
                                <option value="balanced-growth">Balanced / Growth</option>
                                <option value="growth">Growth</option>
                                <option value="maximum-growth">Maximum growth</option>
                            </optgroup>
                </select>
            </div>
            <div class="profilebox">
                <h2>Country:</h2>
                <select name="country" id="country">
                    <optgroup label="Europe">
                        <option value="united-kingdom">United Kingdom</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="spain">Spain</option>
                        <option value="italy">Italy</option>
                        <optgroup label="North America">
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="mexico">Mexico</option>
                            <optgroup label="Latin-America">
                                <option value="brazil">Brazil</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="argentina">Argentina</option>
                                <optgroup label="Asia">
                                    <option value="china">China</option>
                                    <option value="india">India</option>
                                    <option value="indonesia">Indonesia</option>
                                    <option value="australia">Australia</option>
                </select>
                <h2>Investment experience</h2>
                <select name="experience" id="experience">
                    <option value="none">None</option>
                    <option value="limited">Limited</option>
                    <option value="basic">Basic Understanding</option>
                    <option value="in-progress">Some experience</option>
                    <option value="experienced">Experienced</option>
                </select>
                <input type="submit" id="save" value="Save" />
            </div>
            <h1>Investment Experience</h1>
            <textarea id="past-experience" placeholder="Describe your past investment experience"></textarea>
            <input type="submit" id="save-blog" value="Save" />
        </div>
        <div class="blog">
            <h1><a href="#">Personal investment views</a></h1>
            <textarea id="investment-views" placeholder="What are your latest investment views. These can include your thoughts on; stocks, bonds, Funds, to macro-economic events, or geopolitical events"></textarea>
            <input type="submit" id="save-blog" value="Save" />
            <p>30/11/2012 - I have been investing now for nearly ten years. I started investing straight out of school after a week's work experience at an asset management firm. That week of investment experience totally hooked me on the battle of mind and nerves against every other investor in the world. I have tried various different ways of investing. Initially I invested only in individual stocks which I followed very carefully. I invested in companies which I read about and liked the investment story. For example my very first investment was AG Barr. Scottish drinks company, possible takeover by CocaCola, and nearly every Scot drinks IrnBru. Expanding in Russia - something I thought was a great idea given it is a common mixer with Vodka in Scotland, and of coures Russians love Vodka. You see nothing too complex in my investment thoughts. I invested like this for probably five years through university funding my social life. Gradually my risk appetite increased and I became interested in sectors such as the AIM stockmarket, and read the FT Lex column for more complex ideas. I did fairly well for 4 years on my basic investment ideas until typically made the decision to up the risk in 2007 by buying some AIM stocks. Within the space of a year blew up most of my portfolio during the financial crisis. At this point I was lucky enough to get a job in the City in London as a private client stockbroker. I tried everything to get a job in other sectors, my rational that I had a passion for investing and it was a hobby rather than a chore, and I really didn't want to spoil that. I took the risk to get a job in finance and hoped to high heaven it wouldn't spoil my number one hobby. Five years on and I can say joyfully that it only reinforced my passion for finance if not deepened what at times I consider an obsession. Learning to be a stockbroker was not easy and I mostly educated myself. I have completed all the relevant exams, some more challenging than others. Having completed all the compulsory exams for my firm, I am now starting down the CFA to further my knowledge. I hope to learn about complex financial instruments, foreign markets, and how to tear a balance sheet to pieces and understand a company completely. Along the way to becoming a fully fledged stockbroker I have made bad investment decisions, and great ones. I have invested in funds, futures, CFD's, spread-bets commodities, individual equities, and tried short term and long term investing strategies. It strikes me that the markets all seem to follow similar themes - for example at the moment, all brokers are banging on about companies with strong balance sheets, international earnings, sustainable yield, low PE preferable and take the long-term view in this low-growth environment. Is this sensible advice when everyone is saying this? Be the trend follower or trend maker? I don't have the answer to this, but I hope to explore various ideas like this throughout this blog and share ideas with you. Now you know a bit about me, how I got into finance, and the purpose of this blog. For anyone who follows a similar passion and would like to share ideas and experiences please do get in touch.</p>
        </div>
        <div class="portfolio">
            <h1><a href="#">Portfolio analytics</a></h1>
            <table class="portfolio">
                <caption>Value allocated by portfolio</caption>
                <thead>
                    <tr>
                        <th>Portfolio Name</th>
                        <th>Portfolio Value</th>
                        <th data-graph-skip="1">Yield (GBP)</th>
                        <th data-graph-skip="1">Yield (%)</th>
                        <th data-graph-skip="1">Profit (GBP)</th>
                        <th data-graph-skip="1">Profit (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Main account</td>
                        <td>1000000</td>
                        <td>50000</td>
                        <td>5.0</td>
                        <td>99999</td>
                        <td>10.0</td>
                    </tr>
                    <tr>
                        <td>ISA account</td>
                        <td>500000</td>
                        <td>25,000</td>
                        <td>2.9</td>
                        <td>10111</td>
                        <td>12.0</td>
                    </tr>
                    <tr>
                        <td>SIPP account</td>
                        <td>120000</td>
                        <td>12000</td>
                        <td>2.0</td>
                        <td>15320</td>
                        <td>14.0</td>
                    </tr>
                </tbody>
            </table>
            <div class="pie-chart">
                <div id="asset-pie"></div>
            </div>
            <div class="pie-chart">
                <div id="currency-pie"></div>
            </div>
            <table class="asset-allocation" data-graph-container="#asset-pie" data-graph-type="pie">
                <caption>Portfolio asset allocation</caption>
                <thead>
                    <tr>
                        <th>Asset Type</th>
                        <th data-graph-skip="1">Value</th>
                        <th>Portfolio %</th>
                        <th data-graph-skip="1">Yield (GBP)</th>
                        <th data-graph-skip="1">Yield (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fixed Interest</td>
                        <td>525000</td>
                        <td>25</td>
                        <td>500000</td>
                        <td>3.0</td>
                    </tr>
                    <tr>
                        <td>Equities</td>
                        <td>427500</td>
                        <td>75</td>
                        <td>60000</td>
                        <td>4.0</td>
                    </tr>
                    <tr>
                        <td>Property</td>
                        <td>120000</td>
                        <td>5.0</td>
                        <td>10000</td>
                        <td>2.0</td>
                    </tr>
                    <tr>
                        <td>Alternatives</td>
                        <td>52000</td>
                        <td>3.2</td>
                        <td>3250</td>
                        <td>1.0</td>
                    </tr>
                </tbody>
            </table>
            <table class="currency-allocation" data-graph-container="#currency-pie" data-graph-type="pie">
                <caption>Portfolio currency allocation</caption>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th data-graph-skip="1">Value</th>
                        <th>Portfolio %</th>
                        <th data-graph-skip="1">Yield (GBP)</th>
                        <th data-graph-skip="1">Yield (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sterling</td>
                        <td>525000</td>
                        <td>25</td>
                        <td>500000</td>
                        <td>3.0</td>
                    </tr>
                    <tr>
                        <td>US Dollar</td>
                        <td>427500</td>
                        <td>75</td>
                        <td>60000</td>
                        <td>4.0</td>
                    </tr>
                    <tr>
                        <td>Euro</td>
                        <td>120000</td>
                        <td>5.0</td>
                        <td>10000</td>
                        <td>2.0</td>
                    </tr>
                    <tr>
                        <td>Swiss Franc</td>
                        <td>52000</td>
                        <td>3.2</td>
                        <td>3250</td>
                        <td>1.0</td>
                    </tr>
                    <tr>
                        <td>Japanese Yen</td>
                        <td>52000</td>
                        <td>3.2</td>
                        <td>3250</td>
                        <td>1.0</td>
                    </tr>
                </tbody>
            </table>
            <h1><a href="#">Equities</a></h1>
            <table class="equities">
                <caption>Value allocated by portfolio</caption>
                <thead>
                    <tr>
                        <th>Portfolio Name</th>
                        <th>Portfolio Value</th>
                        <th>Yield (GBP)</th>
                        <th>Yield (%)</th>
                        <th>Profit (GBP)</th>
                        <th>Profit (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Main account</td>
                        <td>1000000</td>
                        <td>50000</td>
                        <td>5.0</td>
                        <td>99999</td>
                        <td>10.0</td>
                    </tr>
                    <tr>
                        <td>ISA account</td>
                        <td>500000</td>
                        <td>25,000</td>
                        <td>2.9</td>
                        <td>10111</td>
                        <td>12.0</td>
                    </tr>
                    <tr>
                        <td>SIPP account</td>
                        <td>120000</td>
                        <td>12000</td>
                        <td>2.0</td>
                        <td>15320</td>
                        <td>14.0</td>
                    </tr>
                </tbody>
            </table>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos expedita sapiente ipsam error perspiciatis deserunt possimus. Eos dolor, laudantium recusandae. Error vero beatae inventore dolores pariatur enim dolore asperiores debitis.</p>
            <h1><a href="#">Bonds</a></h1>
            <table class="bonds">
                <caption>Value allocated by portfolio</caption>
                <thead>
                    <tr>
                        <th>Portfolio Name</th>
                        <th>Portfolio Value</th>
                        <th>Yield (GBP)</th>
                        <th>Yield (%)</th>
                        <th>Profit (GBP)</th>
                        <th>Profit (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Main account</td>
                        <td>1000000</td>
                        <td>50000</td>
                        <td>5.0</td>
                        <td>99999</td>
                        <td>10.0</td>
                    </tr>
                    <tr>
                        <td>ISA account</td>
                        <td>500000</td>
                        <td>25,000</td>
                        <td>2.9</td>
                        <td>10111</td>
                        <td>12.0</td>
                    </tr>
                    <tr>
                        <td>SIPP account</td>
                        <td>120000</td>
                        <td>12000</td>
                        <td>2.0</td>
                        <td>15320</td>
                        <td>14.0</td>
                    </tr>
                </tbody>
            </table>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae magnam ratione, labore, dicta, sint qui eos quasi doloribus autem, cumque rerum rem dolore quas enim iste soluta dolorum. Rerum!</p>
            <h1><a href="#">Funds</a></h1>
            <table class="funds">
                <caption>Value allocated by portfolio</caption>
                <thead>
                    <tr>
                        <th>Portfolio Name</th>
                        <th>Portfolio Value</th>
                        <th>Yield (GBP)</th>
                        <th>Yield (%)</th>
                        <th>Profit (GBP)</th>
                        <th>Profit (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Main account</td>
                        <td>1000000</td>
                        <td>50000</td>
                        <td>5.0</td>
                        <td>99999</td>
                        <td>10.0</td>
                    </tr>
                    <tr>
                        <td>ISA account</td>
                        <td>500000</td>
                        <td>25,000</td>
                        <td>2.9</td>
                        <td>10111</td>
                        <td>12.0</td>
                    </tr>
                    <tr>
                        <td>SIPP account</td>
                        <td>120000</td>
                        <td>12000</td>
                        <td>2.0</td>
                        <td>15320</td>
                        <td>14.0</td>
                    </tr>
                </tbody>
            </table>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reprehenderit error ab? Quo et cum quisquam delectus rerum nemo neque in, quae. Dolorem velit, aspernatur dolorum quisquam! Odit, minus, vitae.</p>
        </div>
        <div class="economics">
            <h1><a href="#">Economics</a></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dolorem perspiciatis esse repudiandae quos voluptas quasi eaque error beatae veritatis totam soluta illo asperiores aliquid, assumenda quia nemo animi sapiente.</p>
        </div>
        <div class="trading">
            <h1><a href="#">Trading platform</a></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dolorem perspiciatis esse repudiandae quos voluptas quasi eaque error beatae veritatis totam soluta illo asperiores aliquid, assumenda quia nemo animi sapiente.</p>
        </div>
        <div class="following">
            <h1><a href="#">Investors you are following</a></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nisi cupiditate, tenetur soluta eos quam unde dolore officiis. Numquam deserunt, animi dolorum laudantium corrupti ad repellat deleniti debitis harum atque.</p>
        </div>
    </site-wrap>
    <!-- <footer>Copyright &copy;2015 Sam Younger</footer> -->
    <script type="text/javascript" src="http://www.pureexample.com/js/lib/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="http://www.pureexample.com/js/flot/jquery.flot.min.js"></script>
    <script type="text/javascript" src="javascript/main.js"></script>
    <!-- this is the jquery library link -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <!-- the script below is for chart formatting -->
    <script type="text/javascript" src="https://code.highcharts.com/highcharts.js"></script>
    <script type="text/javascript" src="javascript/jquery-highchartTable-plugin-master/jquery.highchartTable.js"></script>
    <!-- ***************************************** -->
</body>
</html>