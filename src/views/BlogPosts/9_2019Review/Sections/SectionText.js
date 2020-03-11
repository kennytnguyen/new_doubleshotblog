import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components



//Pictures
import scale from "assets/img/img/9_scale.jpg";
// import SectionCarousel from "./SectionCarousel.js";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";
// import { Grid } from "@material-ui/core";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            tl;dr
          </h3>
          <p>
            Had the most amazing year of my life (thus far) with fun experiences, new friends, and lots of self-growth. 
            I was lucky to have learned a lot about myself, what I valued in close(r) relationships, and how to adapt towards mindset shifts. 
          </p>
          <br />

          <h3 className={classes.title}>
            Disclaimer
          </h3>
          <p>
            This entire write-up is a self-reflective piece and how I currently feel at the time I wrote it. 
            People, everyone including you (the reader), me, and those around you are all subject and allowed to change 
            without negative perception of who they once were in the past. If we continue to judge people on who they were, 
            how can we wish to improve the world tomorrow.
          </p>
          <br />

          <h3 className={classes.title}>
            Introduction
          </h3>
          <p>
            The last time I posted something was when I wrote an Ask Me Anything about being one year out of college. 
            When writing that post, it was kind of like a half-year check-in to see how much I’ve grown, learned, or even regressed. 
            Similarly, as 2019 winds down, or any year for that matter, I think it’s important to self-reflect and re-calibrate before the new year starts.
            <br></br><br></br>
            I feel like most people like to begin setting goals or expectations that they would hope to fulfill in the following year 
            (in this case 2020) without looking back to confront mistakes or express gratitude. I’m primarily writing about my 2019, 
            to share what I’ve learned, talk about the people I met, admit to the mistakes I made, and explain how all of these 
            lessons, friends, and missteps helped shape who I am, how I think, and what I want to change.
            <br></br><br></br>
            It took me a while (almost 2-3 months) to really sit down, process everything that has happened, and really find a 
            way to make sense of what I experienced, learned, or observed.
          </p>
          <br />

          <h3 className={classes.title}>
            Quick Summary
          </h3>
          <p>
            First things first, let’s just get the degenerate activities out of the way. 
            I kicked off 2018 to 2019 at OMFG NYE! In San Diego but for the remainder of the year in 2019, I:
          </p>
          <ul>
            <li>
              Went to <b>105</b> unique functions or events
                <ul>
                  <li>
                    Averaged <b>2.2 events per weekend</b>.
                  </li>
                  <li>
                    Averaged <b>26.4 shots per weekend</b>.
                  </li>
                </ul>
            </li>
            <li>
              Spent <b>88 days/nights</b> <i>(24.1%)</i> not at home or out of town (weekdays and weekends included).
            </li>
            <li>
              Spent <b>47 weekends</b> <i>(90%)</i> going out.
            </li>
            <li>
              Met <b>over ~400+ people</b> over the course of the year.
            </li>
            <li>
              Saw about <b>161+ different live performances</b> at festivals, individual concerts, or events.
            </li>
          </ul>
          <br />

          <h3 className={classes.title}>
            Expanding the Scale
          </h3>
          <p>
            Meeting people is beneficial, period. It doesn’t really matter if they’re people you like, people you hate, people you love, 
            people you’re apathetic towards. I hold onto this idea with a tight grip because I truly think that the best way to learn about 
            yourself is to meet people because each person I ever met presented me with opportunities to self-reflect. 
            This doesn’t mean that they’re necessarily going to ask you questions about yourself necessarily, 
            it’s just that, when you leave the interaction or receive a first impression you come out understanding a little bit more about 
            yourself and what you care about relative to the individual you met.
            <br /><br />
            More thoughts, more people, more reflection points all add onto and help expand your scale in terms of how you view the world, 
            people, and those around you. This is particularly important because every experience, interaction, or impression you receive 
            will always fit somewhere along this indefinite scale of yours. Ranging from 0 to 100 or 1000 or 10000000, 0 being 
            <i>“I absolutely hated everything about that”</i> and the other end being a euphoric feeling of happiness and fulfillment, 
            each experience will fit somewhere in between. If an experience is worse than your current idea of “0” 
            then you know to say fuck that shit and move on with your life. If a particular interaction makes you feel happy in 
            comparison to your current idea of “happiness or 100000” then you know to hold onto that person or experience quite dearly.
            <br /><br />
            This is was one of my biggest takeaways of 2019 because I expanded my scale to the point where it’s very difficult for 
            me to find people or experience things that tip the very ends of my scale, but also to that point it makes me very grateful 
            that I’m consistently put in situations where I don’t feel extremely negative towards anything. One thing I will say though, 
            is I’m anticipating more experiences and people that turn 1000 to 1001, instead of fitting somewhere in between. 
            <br /><br />
            Think of a tape measure, the more you experience the longer you can measure.
          </p>

          <GridContainer>
            <GridItem>
            <h6>You want a long boi</h6>
              <img
                src={scale}
                alt="You want a long boi"
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
          </GridContainer>
          <br />

          <h3 className={classes.title}>
            Meeting People as a Young Adult
          </h3>
          <p>
            I get asked about how I’m able to meet people post-grad because it’s apparently on the more difficult-side but my answer is always the same. 
            Just be single or go out more. It is extremely beneficial and easy to meet people as a single individual, 
            not because there are expectations or implications but rather because there is little need to feel obligated or consider 
            someone else within the indirect impact of your actions. There is no one to get upset at you for:
            <br /><br />
          </p>
          <ul>
            <li>Staying out late</li>
            <li>Exploring new activities</li>
            <li>Bonding with people, both new and old</li>
            <li>Drinking and having too fun without their presence</li>
            <li>Meeting new interesting people</li>
          </ul>
          <p>
            <br /><br />
            Touching upon the latter part of my answer, I found that the best way to meet people is through alcohol consumption 
            (if you couldn’t already tell) because it’s a social lubricant and helps put you in positions where you can really get to 
            know people in a short amount of time.
            <br /><br />
            Pre-games help me get a feel for how I should act to best get along with the group(s) I’m with. 
            It’s usually an opportunity for me to observe, react, and adapt in different environments and conversations. 
            One thing I noticed about myself is that when I’m in a room full of strangers I tend to say less and observe more (<i>More on this later</i>), 
            and in a room with people I know, I tend to express my strong personality.
            <br /><br />           
            The destination (club, concert, etc.) is how I get a better understanding for people’s prioritizations when they go out. 
            I know that a lot of people have different agendas for when they go out. I personally just like spending time with my friends, 
            listening to music we like, and dancing in a group setting. If people’s agendas are to find people to hook-up with or some type of 
            physical reaffirmation from strangers, that’s usually a sign for me to be more cautious and refrain from bringing people whom I care 
            about around them. This matters to me because I like bringing people together (especially different groups of friends), 
            so having to watch out for individuals who have specific intentions is inherently exhausting.
            <br /><br />
            The best part is what comes after the club, when you and all your friends (old or new) all go back to someone’s place and 
            talk for hours about each other’s lives, experiences, and perspectives. 
            I love this because it’s what really allows me to get to know new people. I wish I lived in the city for this reason but 
            I’m always stuck having to leave by 4 or 5AM to drive back to South Bay. 
            I love showering and sleeping in my own bed so I guess this is a trade-off I have to make.
            <br /><br />
            This series of events is what I think is important towards building friendships at a “younger” age when we have more opportunities 
            to explore and meet new people because we have the energy and time to do so. 
            Going out is something I’ll never take for granted since I’ve met so many great people and maintained friendships just by 
            gathering large groups of people around bottles of alcohol.
          </p>
          <br />

          <h3 className={classes.title}>
            Mitigating Work Overlap
          </h3>
          <p>
            <i>Work to live, not live to work.</i> Is something I tell a lot of people because I truly think that there should be almost 
            zero overlap between work and personal life. I won’t elaborate too much here but it’s just healthy that you have multiple different 
            “personalities” built into your… singular personality. The ability to context switch between diverse groups of people can only benefit 
            you in the long run. There’s a time and place for everything and frankly not every part of who I really am is suited for work and workplace 
            Kenny might not be ideal for social settings. I try not to have any overlap as a means of preserving different aspects of my personality. 
          </p>
          <br />

          <h3 className={classes.title}>
            Being Different
          </h3>
          <p>
            For me, I personally also don’t like talking about work, career, and school outside the workplace because I feel like 
            they don’t make me who I am as a person. There are so many other aspects of me or my life that drive passion, ambition, 
            and motivation to wake up everyday that I almost feel offended if people only cared to talk about those things with me. 
            Thus it’s rather difficult to convey to strangers or express upon first impressions that I don’t care about the 
            surface-level shit and I genuinely want to get to know them as people (which can be intimidating or off-putting). 
            <br /><br />
            In the times I am presented with superficial and unimportant conversation topics, 
            I am quick to brush them off to move on with my life. It’s why I’m awful with small talk because most of the time, 
            I just don’t give a shit about questions prying me about minute aspects of my life that don’t make up who I am as a person. 
            This understanding that a lot of people tend to attach hobbies, activities, and interests with an 
            individual’s personality is also what strives me to want to be different. 
            <br /><br />
              <b>It’s why I will never consider myself a raver </b> <i>(despite loving music and festivals).</i>
              <br />
              <b>It’s why I’m sometimes ashamed to say I work in tech</b> <i>(even though I'm at Facebook).</i>
              <br />
              <b>It’s why I never felt incentivized to join any clubs, organizations, and fraternities in college.</b>
              <br />
              <b>It’s why I always try to be skeptical and go against the grain.</b>
              <br /><br />
            It’s not that I necessarily want to be a hipster or want to be unique. 
            I just don’t want to be bucketed into groups of people who I struggle to find commonalities with and have no relation to. 
            <br /><br />
            <i>Don’t trap me because I have already felt this way my entire life.</i>
          </p>
          <br />

          <h3 className={classes.title}>
            Being Alone
          </h3>
          <p>
            For complete context, I live about a 5 minute drive from work and work is in Menlo Park, CA
            (about ~35 miles from San Francisco or a 40 minute drive). This leaves me with a lot of free time after work 
            as I don’t spend time commuting, but as a result also leaves me stuck in the suburbs with limited social interaction 
            and activities throughout the week. Don’t get me wrong, it sounds a little awful to be mostly alone for 5-6 days out of the week, 
            but it’s actually the best. Might I also add that on top of being physically alone, 
            2019 was my first full-year as a legitimate adult with a new(er) mentality on life, relationships, and self.
            <br /><br />
            The best and one thing I really want to emphasize about my year was that I found a lot of enjoyment, peace, and solitude 
            in growing my independence and being alone. I didn’t do it on purpose since it was just a bi-product of constantly being 
            in an environment that was removed from distractions, entertainment, and people. I carried on my own conversations in my 
            head, found things to occupy my time with, and discovered new methods of entertainment. One of the many conclusions 
            throughout this semi-arduous thinking process is that I have all the reasons in the world to always put myself first 
            whenever it comes to my own priorities and values.
            <br /><br />
            This thought process contributes directly to what I personally think is one of the most important aspects of growing up 
            which is learning how to be independent or finding independence. 
            Independence is much more than cooking for yourself because it’s also mental and emotional alongside physical independence. 
            <br /><br />
            <b><i>Mental independence</i></b> to me is being able to introspect and be self-aware to the point where I am able to drive conversations related to self values and worth without needing someone reaffirm me of my beliefs or think on my behalf; it’s being able to think for yourself and your own actions. 
            <br /><br />
            <b><i>Emotional independence</i></b> is being happy with doing things alone whether it’s eating out by yourself or simply spending the entire day indoors interacting with nobody. This idea of happily alone is not being dependent on others to uphold or make you happy, it’s what personally I think makes me ready for a relationship without needing or wanting to be in one. 
            <br /><br />
            The lack of emotional independence is something I witness people lack a strong grasp or understanding of. 
            Being the observant person I am, I witness a lot of people who aren’t ready to be alone so then they put 
            themselves in situations where they crave for another person to help take care of all their problems (career, mental, emotional, etc.). 
            They grow to become dependent on another person and can easily justify the state, trajectory, or “health” of their relationship 
            in any way they see fit. 
            <br /><br />
            People begin to project their greatest insecurities and problems onto each other and then it gets to the point 
            where they are so dependent that they attempt to leech off one another even though there’s nothing positive to leech off of. 
            That’s the vicious cycle of a toxic relationship, it’s essentially just people who don’t know how to be alone attempting to fill 
            a void in their life with someone else, dragging that person down with them.
            <br />
          </p>
          <div className={classes.typo}>
            <div className={classes.note}></div>
            <Quote
              text="I believe that 80% of relationships in the world are horseshit. 
                    A bunch of people who never took time to learn how to be alone, 
                    therefore never learned how to love themselves, so you employed someone else to do it."
              author=" Daniel Sloss, Comedian"
            />
          </div>
          <p>
            I’ve learned to focus on myself and leave my problems up for just me to solve. 
            Granted, it’s healthy to know that you’re never alone but this is part of me having learned how to be selfish.
            This comes from privilege however, I’m lucky to have a handful of friends that respect my space and will always be there for me.
          </p>
          <br />

          <h3 className={classes.title}>
            Selfishness
          </h3>
          <p>
            Being selfish is something I noticed a lot of people try to do but I’d really want to baseline two definitions I have for being selfish. 
            In both scenarios you have a person and their problem in relation to a group of people. To me and possibly to others, an unhealthy form 
            of selfishness is when that person allows their problems to spill over into the group of friends or family, expecting others in their 
            life to interject and help solve this problem with absolutely zero contextual knowledge. It’s when someone’s actions will inhibit the 
            lives and stability of those around them no matter how minute the problem may be. 
            <br /><br />
            The flipside is when a person is selfish in that they take full ownership of their time, resources, and problems and ensures that their 
            selfishness does not negatively affect others in their life. My problems are mine (don’t solve them for me), 
            I’m going to be selfish with my time and not share it with anyone else (I want to be more selective with my time), 
            I’m going to be selfish with my resources (I won’t share my tangible goods or intangible knowledge). 
            Being selfish allows me to give myself opportunities to focus on hobbies, activites, or myself. 
            I personally find this more aligned with what I think is healthy and because of this idea of selfishness, 
            it’s very easy for me to disregard activities, peer pressure, or obligations to put my priorities and myself first.
            <br /><br />
            The latter concept of selfishness however only works if you, your friends, and your family are all people you can rely on to 
            take ownership of their own lives and be selfish in their own regard. For me, it’s important to surround myself with people 
            who I can depend on to be selfish with their time because it means they give a shit about themselves, which is something 
            I’d want in my friends since I actually care that they have opportunities to put themselves first.
            <br /><br />
            Good friends will always be around and strive to improve themselves without you needing to push them, and vice-versa. 
            Good friends will understand. Find good friends.
          </p>
                  
          <br />

          <h3 className={classes.title}>
            Security and Self-Confidence
          </h3>
          <p>
            Dating apps are pretty objective and rather surface level for obvious reasons. 
            People will judge you on your physical appearance, education, and occupation (or company). 
            What I find the most interesting is that it has always been this way growing up for Asians across the world. 
            It’s mostly laughable that on this Facebook group, <i>Subtle <b>Asian</b> Dating</i>, that there are a ton of people that like “auctioning” 
            off their friends by emphasizing qualities that they personally think are selling points. 
            I found that it is just a huge projection of what these people value and as a result, think others would value as well.  
            <br /><br />
            The qualities people really focus on are the ones most Asian parents think are valuable and happen to be both naturally objective and tangible. 
            Objective qualities, characteristics, or “defining” background information can be:
            <br />
          </p>
            <ul>
              <li>
                <i>Height</i>: If people are being surface level and objective then why not put weight too?
              </li>
              <li>
               <i>School</i>: X school most Asian parents would be proud of so “you know they’re smart.”
              </li>
              <li>
                <i>Major</i>: X major most Asian parents would be happy with or can be lucrative in so “you know they got $$$.”
              </li>
              <li>
                <i>Profession</i>: X occupation most Asian parents would be pleased with so “you know they have a future.”
              </li>
              <li>
                <i>Interests</i>:
                <ul>
                  <li>
                    Probably things they were forced into their entire lives like piano, badminton, etc.
                  </li>
                  <li>
                    Post-graduate hobbies that don’t require direct competition, a strong athletic foundation, 
                    intense hand eye coordination like rock climbing, powerlifting, marathon running, bouldering, etc.
                  </li>
                  <li>
                    Set of activities that will uphold their “personality” or re-assure them that they can truly fit in like drinking milk tea, “raving,” etc.
                  </li>
                </ul>
              </li>
              <li>
                <i>Pictures</i>: Got to add something that requires pure objectivity right?
              </li>
            </ul>
            <p>
            Before you know it, you have 100x carbon copies of the same Asian person but in different bodies and places across the world.
            
            After scrolling through endless auctions because Facebook’s awesome algos love to blow these posts up in my face, 
            I began to feel a lot of reassurance in who I was as a person. This feeling transpired over the course of time because I began to ask myself:
            <br />
          </p>
          <div className={classes.typo}>
            <Quote
                text="What do I think are my refining qualities?"
            />
            <Quote
                text="What do I personally value in life, people, or myself?"
            />
          </div>
          <p>
            It’s an interesting perspective because I believe that for a lot of people, they tend to focus on what others think, value, and care about 
            relative to themselves which leads to people pleasing. Parents may think engineering, medical, or business are the most preferred lines of 
            work and because they place so much value on it, they incept the idea that so will others (future potential significant others). 
            Similarly because we’re a social species, the same goes with how social media reflects on people’s actions. 
            It’s a rabbit hole of unfulfillment if one is trying to live someone else’s due to their envy, crave, and yearn for something they don’t have 
            but place superficial value on.
            <br /><br />
            When it came specifically to myself, I started to understand that all the things I really did love or appreciate about myself were unquantifiable and intangible. 
            I realized that having an objective laundry list of qualities, hobbies, or goals would always make me want to do more and we really 
            don’t have time to pursue everything on a surface-level, so internal growth began to be my number one priority over the course of the year. 
            As I understood and learned more about myself, the more I loved who I was and the less I cared about external reaffirmation.
            <br /><br />
            With that being said, I’d like to refer to an excerpt from Daniel Sloss’ Jigsaw stand-up special regarding relationships and self-love.
            <br /><br />
          </p>
          <div className={classes.typo}>
              <Quote
                text="You have to learn to love yourself before you can allow someone else to do it as well. 
                      That’s it. There’s nothing wrong with being single. There’s nothing wrong with being alone. 
                      There’s nothing wrong with taking time for yourself to work out who you are before you go out there into the dating world, 
                      because how can you offer who you are if you don’t know who you are? 
                      There’s nothing wrong with being selfish for a bit because you’ve got the rest of your life to be selfless. 
                      If you only love yourself at 20%, that means somebody can come along and love you 30%. 
                      You’re like, ‘Wow, that’s so much.’ It’s literally less than half. 
                      Whereas if you love yourself 100%, a person that falls in love with you has to go above and beyond the call of duty to make you feel special. 
                      That’s something every one of us deserves, and that doesn’t mean you’re not happy."
                author=" Daniel Sloss, Comedian"
              />
          </div>

          <h3 className={classes.title}>
            What's in Part 2
          </h3>
            <ul>
              <li>
                Value of Friendships
              </li>
              <li>
                Making of the Red-Flag List
              </li>
              <li>
                Ghosted
              </li>
              <li>
                Gaming Computer
              </li>
              <li>
                Anticipation
              </li>
              <li>
                Permanence vs. Hopefulness, Dreams
              </li>
              <li>
                Mindset Shifts
              </li>
            </ul>
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
