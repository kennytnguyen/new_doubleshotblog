import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
import SectionCarousel from "./SectionCarousel.js";
// core components

import image1 from "assets/img/img/ama_past.jpg";
import image2 from "assets/img/img/ama_present.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

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
            Disclaimer
          </h3>
          <p>
            These answers are just how I tend to look at things.
            They have zero evidence, research, or data that proves
            what I see as "correct." Take it with a grain of salt because
            I'm not wise by any means, I'm just being super straightforward.
          </p>

          <p><b>Here's a neat playlist to listen to while you read.</b></p>
          <iframe src="https://open.spotify.com/embed/user/axcelaration/playlist/0IflNcQnmivx1v0TDCqS9m" width="600" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <br/>

          <h3 className={classes.title}>
            What are some challenges you experience
            in and outside of the workplace as a new grad? How do you deal with them?
          </h3>
          <p>
            I think this is a hard question to answer because the challenges that
            I personally experience in and outside the workplace are typically tied
            to how I see my career panning out past the immediate day, week, month,
            quarter, half, and year. For example, I may be tasked with a specific
            problem, like… “Wow I’m doing this repeatable task every day that uses
            the same 4-5 tools.” I can approach it in a handful of different way:
          </p>
          <ol>
            <li>Automate it using something that concurrently interfaces with
              the 4-5 tools with some neat data pipelines and stuff. [Go to engineering team]</li>
            <li>Create a half assed script or excel that tries to read and cross-reference
              all the different data points to spit out a couple output you need. [I have to code]</li>
            <li>Consolidate all the tools into 1 or 2, get organizational and cross-functional
              buy-in so we can convince engineers that this is an overall Win because of
              X amount of reasons. [a lot of people now and tons of push back]</li>
            <li>Continue doing the repeatable task because I don’t really care..
              I only do it once a quarter anyways. [trade-offs and cost-benefit]</li>
          </ol>
          <p>
            This challenge is more than just a workplace or operational problem
            I have to deal with, this literally stems outside of work because I
            have a series of questions I want to ask:
          </p> 
          <p><b>Career Related</b></p>
              <ol>
                <li><b><i>How long do I want to stay at Facebook?</i></b></li>
                  <br/>
                  <p>
                    This is important because if I intend on staying for a long time,
                    I might want to do #3 since it’s definitely going to take longest
                    BUT give me the most impact, breadth within the company, and give
                    me the opportunity to work with a ton of engineers and leadership
                    on transformational projects. Nothing turns leadership on more
                    than scalability, metrics, and making people’s lives easier if
                    that’s the goal.
                  </p>
                  <p>
                    Well maybe I don’t like free food, 24/7 gyms, top pay, and stability
                    and am looking for a change of scenery. I might want to opt for #1
                    or #2, where I’m able to go in and make immediate impact for the
                    people around me. I’d then have a project I get to ship quickly
                    with some buffer to communicate data points and then put it on my
                    resume, dip to the next company.
                  </p>
                  <p>
                    I’m not even going to talk about #4, like this is literally if
                    I’m okay doing the same shit.. That personally is not me.
                  </p>
                <li>
                  <b><i>
                    What is my career trajectory like?
                    Do I want to transition into consumer-facing product or internal tooling?
                    Or do I not want to do any type of product,
                    do I want to go into people management and be an engineering manager?
                  </i></b>
                  
                </li>
                  <br />
                  <p>
                    Similar type of questions,
                    just try to understand the nature of my work and
                    how it applies to my career.
                  </p>
                <li>
                  <b><i>
                    What is the next company I want to work for?
                    Or do I want to make my own company?
                    How about switching teams?
                  </i></b>
                </li>
                  <br />
                  <p>
                    Be introspective and understand what other teams or companies are working on. Ask questions, be curious.
                  </p>
                <li>
                  <b><i>
                    What skills do I want to learn and work on? What skills are transferable?
                  </i></b>
                  
                </li>
                  <br />
                  <p>
                    Eh self-explanatory
                  </p>
              </ol>
                <p><b>Life Related</b></p>
                <ol><b><i>
                  <li>
                  Where do I expect myself to be life and relationship-wise in the next several years?
                  </li>
                  <li>
                    Do I want to buy a house?
                  </li>
                  <li>
                    When do I want to settle down?
                  </li>
                  <li>
                    What kind of car do i want to drive?
                  </li>
                  <li>
                    Where do I want to travel to?
                  </li>
                  <li>
                    What festivals do I want to attend?
                  </li>
                  <li>
                    How long do I keep up this lifestyle for?
                  </li>
                  <li>
                    Can I do this with any other company?
                  </li>
                  </i></b>
                </ol>

            <p>These are all questions I might ask myself so
              I can properly gear myself towards making the right
              decisions in the workplace that will set me up for
              proper success outside of the workplace. After all,
              we don’t live to work, we work to live.
              Working gives us the ability to live our best lives
              unless your work is what you’ve always dreamed of doing…
              In that case, you’re lucky as hell.
              But for a lot of people that isn’t the case so there’s
              always a very practical realistic approach that can be
              taken to solve specific problems.
            </p>
            <br/>

            <h3 className={classes.title}>
              What is your experience with transitioning
              from being a full time student to now a full time employee
              (at a huge company)?
            </h3>
            <p>
              I’d say the biggest difference however between
              being a student and being an employee (I’m a little lucky
              because I get to define some of my work) is that for the
              first time in my entire life: I get to choose what to do
              next and it is ultimately my responsibility to schedule my time,
              plan things out accordingly, and execute as time passes.
              There are no counselors to hold me accountable,
              there’s no academic probation or “passing” grades to communicate my worth,
              there’s no curriculum for me to follow anymore. I’ll either care, or I don’t.
            </p>

            <p>
              With my understanding of who I am as a person,
              if I choose not to care then time is going to pass,
              I’m going to get older, and what happens is just like everyone else,
              I’m going to regret not doing enough with my time to do shit
              that makes me happy or gets me to where I want to go.
            </p>

            <p>
              I think that’s the harsh reality and the biggest challenge
              that I’ve personally faced in and out of the workplace.
              No one is going to pick my shit up and I can’t necessarily
              hide behind a letter grade or a poor excuse anymore.
              There are a lot of people out there in this world that
              are more capable and smarter than me, so if I don’t choose
              to self-improve and learn then fuck me right?
            </p>
            <br/>

            <h3 className={classes.title}>
                Were there any surprising
                differences between post grad and college life that
                you didn’t expect prior to the transition?
            </h3>
            <p>Some key differences or surprising realizations:</p>
            <ul>
              <li>I didn’t expect myself to care so much about the
                presence of family and friends to the point where
                they’re my top priority until I really did the math
                because you never know what’s going to happen.
                So I’ve been planning as if things didn’t go my way
                and I chose to be the unselfish one.
              </li>
              <li>You thought comparing yourself to people you go to
                college with was “humbling?” Man wait until you go to
                work and everyone around you went to Ivy leagues and
                are the best at what they do. If your only interesting
                fact is that you’re smart, you’re going to have a bad time.
              </li>
              <li>Time passes way faster when your schedule for tomorrow
                can literally remain the same for the next 40 years of your life.
                It only takes “7 next years” for me to be 30.
              </li>I might not get to stay in the Bay Area forever.
                It’s getting way too expensive.
              <li>I didn’t expect myself to be so afraid of growing up.
              </li>
              <li>It’s actually hard to save money especially when you
                can finally afford to buy materialistic goods and go
                to places you’ve always wanted to visit.
              </li>
              <li>Few of the things I’ve taken for granted: Car insurance,
                electricity bills, water bills, gas money, groceries,
                food, company, financial support.
              </li>
            </ul>
            <br/>

            <h3 className={classes.title}>
              How do you meet people/make friends after college?
              Is it difficult to maintain friendships with everyone's busy schedules?
              How do you overcome the feeling of being sad because the friends you're around 24/7 are now states or countries away?
            </h3>
            <p>I think when approaching these three problems,
              you got to understand who you are as a person.
              Not what you want to be necessarily, or who want to hang out with.
            </p>

            <p>For me I only care if 1) you’re fun, 2) you’re not annoying,
              3) you’re down, 4) you’re okay with being embarrassed
              from time to time. Why? I want to have fun. I don’t
              want to have to spend my nights willingly pissed off at
              people that I chose to hang out with. I want to be able to
              do stuff, go out, eat food, and hang out without having to
              convince, beg, or deal with the “I’ll go if X person is going”
              nonsense. The last is because I’m naturally an embarrassing person,
              I do stupid things and say dumb shit so I leave my pride at the door
              (with my shoes).</p>

            <p><b>Facts first [Maintaining Friendships]:</b></p>
              <ul>
                <li>Everyone is DAMN busy, it’s a legitimate excuse.
                  But if no one puts in effort to hang out or meet with each other.
                  You’re literally not going to remain friends with these people anymore.
                </li>
                <li>Relationships are two way streets,
                  don’t let either side forget about the other.
                </li>
              </ul>

            <p><b>Advice [Meeting People]:</b></p>
              <ul>
                <li>Understand what type of friends you want to meet.
                  Different types of people do different things.
                </li>
                <li>Take initiative to set up events, bring people together,
                  and not be an anti-social person.
                </li>
                <li>“I’m down” = More Friends
                </li>
                <li>High tolerance for different types of personalities,
                  bullshit, people = More opportunities to meet new people.
                  Helps because you aren’t butthurt and jaded all the time.
                </li>
                <li>You don’t have to hang out with people again. But give people a chance.
                </li>
                <li>Take a shot. Have fun. Enjoy life. Crack jokes.
                </li>
              </ul>

            <p><b>Advice [Coping]:</b></p>
              <ul>
                <li>Group chats. Messenger. Memes.
                </li>
                <li>Go to Coachella (everyone meets up at Coachella).
                </li>
                <li>Find excuses to go visit them, vice-versa.
                </li>
                <li>Be vocal to having guests stay with you (so people can visit you).
                </li>
                <li>Idk tbh. I haven’t really figured this one out since people are so busy all the damn time.
                </li>
              </ul>
              <br />
            
            <h3 className={classes.title}>
              What was the hardest part about
              leaving college? Best part?
            </h3>
            <p>
              I think the hardest part about leaving college is
              understanding that you’ll never get to go back and
              experience the same thing you did in the last several years.
              The college environment is so important because it’s the only
              and maybe time you’ll ever get to be in a setting where:
            </p>
              <ul>
                <li>Everyone is the same age</li>
                <li>Everyone has the same ambition and activities as you</li>
                <li>Everyone lives within a specific radius of each other</li>
                <li>Everyone is willing to make new friends</li>
                <li>Everyone is “down”</li>
                <li>Everyone probably genuinely wants to have fun</li>
                <li>The list goes on, feel free to add onto it by leaving a comment or something haha.</li>
              </ul>
            <p>
              If you went to a college with no nightlife,
              people who went out and explored, little chances to meet 
              <b>different</b> types of people, and any lick of fun…
              then I’m actually sorry, I won’t be speaking on your behalf.
            </p>
            <p>
              I in particular miss college because it’s essentially the
              formative years in which you develop a lot of great habits,
              good friends, and surround yourself in an environment that
              fosters productivity and growth (maturation from a teen to an adult).
              I don’t think I could have become nearly 20% of the person
              I am today had I gone to another school.
            </p>
            <p>
              The motivation to apply to internships came as a direct
              result of my classmates. The ability to understand my
              emotions and heighten my EQ came from being around transparent,
              honest, and open people (shoutout to Anthony, Carrie, Osagie,
              Leo, Holly, Jacob). People will naturally grow if those around them grow too.
            </p>
            <p>
              There’s this great video of Snoop Dogg interviewing A$AP Rocky.
              He essentially says, if you climb the ladder then the only
              way your friends can be the same level, is if they climb up to you…
              otherwise you have to climb back down. With this logic and being
              in the college environment that I was in, everyone around me was
              elevating themselves which as a result, pushed me to want to elevate
              who I was, whether it be a person, engineer, PM, basketball player,
              lifter, football player, etc. It didn’t matter.
            </p>
            <p>
              This growth of mine was only possible however,
              because I was thrown into a totally brand new environment
              and out of my comfort zone where I was forced to either
              1) make new friends or 2) stay on discord/skype all day.
              I’m grateful that I chose the first path instead of
              gravitating towards the existing circles I had because
              it made me appreciate my friends from home and allowed me to
              learn new things from those I’ve met
            </p>
            <p>
              The absolute best part about leaving college is knowing
              that I felt like I’ve grown as a person and I’m a much
              different person than who I was going into college.
              When I’m able to carry this satisfaction into the next
              part of my life, it makes it so much easier to be able to
              grow when I’ve ingrained this mindset.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zZiiypkTNLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />

          <h3 className={classes.title}>
            Has your relationship with your
            parents changed at all now that you’re on your own?
          </h3>
          <p>
            Yes, I think it’s changed a lot for a handful of different reasons.
            My relationship with everyone in my family has grown a lot mostly
            because I’ve grown up and proven myself. So now that I have:
          </p>
          <ul>
              <li>More mutual respect and understanding.
              </li>
              <li>Life experience and maturity.
              </li>
              <li>Rationality and independence.
              </li>
              <li>A degree and a job.
              </li>
          </ul>
          <p>My parents definitely see me less as a child and more of an adult.
            I can talk to my parents pretty casually about how
            I feel about specific topics and share information about
            work, dating, hobbies, cool things that happened and places
            I’ve gone. A lot of boundaries have been broken and
            I feel a lot more open with everyone in my family because
            now I’m finally closer to the same <b>life stage</b> as them.</p>

          <p>This goes for the most part with how relationships change amongst
            friends, family, and people in general.
            It’s easy to treat someone as a peer or a friend
            when you’re in the same life stage as them.
            Some examples of a life stage could be:
          </p>
          <ul>
              <li>High school: Kiddos.
              </li>
              <li>College (undergrad): Focused on making friends,
                getting settled in, and knowing what you like/dislike.
              </li>
              <li>College (upperclassmen): Getting ready to
                graduate and consider plans past college.
              </li>
              <li>New Grads: Excited about the next stage
                of your life. Time when people have disposable
                income and the ability to travel, do fun things,
                or treat themselves.
              </li>
              <li>Mid-Late 20s: Probably thinking about
                seriously dating, having a career change
                or propelling yourself even more in your current track),
                or moving to a new place.
              </li>
          </ul>

          <p>In each of these life stages there are just common
            obstacles and things people think about on a daily basis
            that make it easy to create conversation over and
            naturally build upon new or existing relationships.
            So it’s not necessarily that I’m on my own,
            but it’s a combination of a handful of things.
            I can take care of myself, pay my own bills,
            keep my room/house clean, go to work, get paychecks,
            and be a responsible adult (as much as I can) that would
            warrant mutual respect not from just my parents,
            but a lot of people I might meet.
          </p>

          <p>Of course there are instances where I just don’t
            care and I want to say some stupid shit.
            But that’s just because I’m being dumb and immature.
          </p>
          <br />

          <h3 className={classes.title}>
            What is one mistake that you made
            after grad that you thought was an important lesson to learn from?
          </h3>
          <p>
            Interestingly enough, I personally don’t think I’ve made any
            mistakes after graduation. It’s interesting to think about
            because the whole point of a mistake is that it’s supposed
            to be a learning experience. It could be a regret, another
            course of action you should have taken, or a misstep in the
            wrong direction. But I feel very strongly that if you meet enough
            people, ask the right questions, listen to their stories, and
            fit their learnings into your own context of life then it’s
            hard to make mistakes.
          </p>
          <p>This is one of the many advantages of being young.
            People have made mistakes before us and we can
            have second-mover’s advantage if we learn from those
            who have experienced things we will experience.
            If you’re about to go to college then you should probably
            ask a college student or someone who just graduated on what
            courses they should take, how to find internships, and
            ways to succeed both academically and socially.
            Before you start a job or during an interview,
            it’s always helpful to go out of your way to understand
            what success looks like by asking questions like
            “what is something others in this position did in order
            to exceed expectations.” Also it’s important to understand
            what failure is, “what is one thing you didn’t like about
            your last relationship or ex-girlfriend/boyfriend.”
          </p>
          <p>These concepts of understanding the mistake apply
            to the greater picture that is everything you’ll
            experience and encounter in life. This is particularly
            why I don’t ever stray away from meeting new people.
            Others have gone through their own struggles and persevere
            to get to where they are now. Whether it is a failure or
            a success to you, you’ll get to hear their story and
            perspectives so you can be cognizant of them when you make
            your own difficult decisions.
          </p>
          <p>My last point about this is, don’t be afraid to make mistakes.
            It happens to everyone. It’s also important to understand when
            you’re in the middle of a mistake and acknowledge what’s
            wrong so you can immediately mitigate the damage.
          </p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={10} md={6}>
              <img src={image1} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={10} md={6}>
              <img src={image2} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <br />
          <h3 className={classes.title}>
            Do you ever get sick of the
            everyday work routine, what do you do to not get burnt out?
          </h3>
          <p>
            A couple rules I follow and they're pretty straightforward:
          </p>
          <ul>
              <li>I don’t live to work, I work to live.</li>
              <li>Find out what you like to do, and just do it.
                It doesn’t even have to cost money. </li>
              <li>I don’t talk about work outside of work.
                I don’t talk about my life outside of work, at work.
                Keep my two lives separate to me means being able to
                detach and have zero chance of problems spilling into
                either bucket.</li>
              <li>Learn to do things by yourself, and enjoy it.</li>
          </ul>

          <p><b>Words of Advice:</b></p>
          <p>Honestly, I could probably write a book on some obscure concept,
            framework, or way of thinking and call it like
            Marie Kondo’s Slapdick Guide for Low Self-Esteem,
            High Entitlement Bay Area Millennials or some dumb shit
            self-help book title just to draw people in and spew a bunch of stupid stuff.
          </p>
          <p>
            I personally just think it’s important to understand what
            stresses you out and find a way to completely detach from it.
            For example, if work is the thing that screws you up on a
            daily basis then I think it’s absolutely necessary that you
            find a way to not take it home with you everyday and on the weekends.
            This means a series of different things for the immediate team you work with:
          </p>
          <ul>
              <li>Skrrt them happy hours</li>
              <li>Swerve those weekend outings</li>
              <li>Miss me with that trivia night</li>
              <li>Hard pass on your kids’ birthdays</li>
          </ul>
          <p>But of course with any <b>logical, rational, reasonable, thoughtful</b> person…
            It will always depend on something and of course you’ll have
            friends at work but just use your best judgement.
            This is just one scenario.</p>

          <p>I’d also list the activities you enjoy, people you like
            to be around, and food you like to eat. I like to lift,
            play basketball, throw a football around, hang out with my
            friends (discord or in-person), and listen to music.
            Lucky for me it’s a little simpler than most but I just
            make sure I check these things off throughout my day or week.
            The best part about work, is that none of it should come home
            with you. Your time is yours.</p>

          <p>Another point I want to make is, understand your career
            trajectory and what you want out of life as a whole.
            See how your career fits into that holistic picture you
            just painted. This burnout might be worth it if it’s all
            for something much more important than how you feel when
            you wake up tomorrow. If answering or figuring all this
            stuff out gives you a bleak answer, I’d look more into
            what you think would make you happy as an occupation or job.
            Hop on LinkedIn and direct message people in those positions
            that you might want to transition into.
            People are always willing to answer questions upon being asked.</p>

          <br />
          <h3 className={classes.title}>
            You can be such a dick some time,
            but I aspire to be successful like you.
          </h3>
          <p>
            Firstly, I’m not successful in my own eyes.
            I haven’t contributed anything meaningful to the world
            nor have I felt like I’ve made a positive impact on people’s lives.
            I’m also not going to justify how I act but I’m going to explain
            why I act a specific way. I think generally speaking
            I’m a pretty honest and straightforward person.
            It can come off as brash, rude, mean, impolite, or
            negative but I can connect it all to this one time my mom
            said something that hurt my feelings a lot but it made me aware
            of a very important characteristic about myself.
          </p>
          <blockquote> “Why is that whenever you get a B+,
            you don’t get to play football (as a starter),
            or something [that impedes your success] happens,
            you always blame it on someone else but never yourself.
            What if you didn’t study or work hard enough for an A-?
            What if you aren’t good enough at football because you don’t practice
            and it’s not necessarily because you’re asian?
            What if you just aren’t accountable, responsible, and disciplined?
            You have too many excuses and it’s not going to get you anywhere.”
          </blockquote>

          <p>I think at this moment in time the beginning of senior year.
            I flipped a switch and was just like yeah I got to quit dicking around,
            trying to hang out with the wrong people, and start giving a
            fuck about myself and who I’m going to become as I grow up.
            It kept me grounded and humble, and that everywhere I’ll
            ever go in life, I will never be the best at anything but
            that doesn’t mean I can’t try to be better.</p>

          <p>My professor Anthony Borquez (CEO of Grab Games and certified gangster) said that:
          </p>
          <blockquote>“it’s not passion that matters,
            it’s all about grit, grind, and resilience.
            You can get punched in the face and lose a little
            bit of passion each time you fall. But if you have
            resilience, you’ll get back up and keep going.”
          </blockquote>

          <p>People could use more backbone, people could be less sensitive,
            people could start caring about themselves more,
            people could have thicker skin, people could be hard-nosed,
            people could persevere. If you have immigrant parents you’ve
            witnessed these qualities in the two people that know you the best.
            These aren’t bad qualities or characteristics to have if you
            use them correctly.</p>

            <br />
          <h3 className={classes.title}>
            Do you go to concerts sober?
            Do you have any cardiac issues from all the adderall?
          </h3>
          <p>
            To the first question. Meet up with me and find out!!
            I have zero cardiac issues because I play a lot of sports haha.
          </p>

          <br />
          <h3 className={classes.title}>
            how much u put on bench though?
          </h3>
          <p>
            At 169lbs I was hitting → Dumbbell Bench/Press for 120lbs per arm x 1.
          </p>

          <br />
          <h3 className={classes.title}>
            How to get into FB?
          </h3>
          <p>
            Idk I just applied and got referred by a friend (shoutout Kunal and Lydia).
            Other than that I’ve never had a referral to any company except for
            Intuit and LinkedIn (where my brother both worked).
            LinkedIn told me to screw off because I wasn’t an Ivy Leaguer.
            Intuit apparently only likes PMs that are the product of Univ.
            Wisconsin-Madison. meh
          </p>

          <br />
          <h3 className={classes.title}>
            How difficult was the Facebook coding test for you man?
          </h3>
          <p>
            PMs don’t code at Facebook. Facebook hires the best engineers for a
            reason so PMs like me don’t attempt to ship bad production code
            and break shit. Google is a little different because they like
            their PMs to be pretty technical (probably helps with building
            products on feasible timelines). When I interviewed with Google
            for TPM it was a pretty easy question (leetcode medium or something).
            I think with Google they cared more about how you approached the problem
            than actually solving it.
          </p>

          <br />
          <h3 className={classes.title}>
            What techniques have you found the most success in finding jobs and landing interviews?
          </h3>
          <ul>
            <li>Understand the job, what challenges you/others might have, and what qualities it might take to succeed it in. Exhibit said qualities.
            </li>
            <li>Know your shit whether it be your resume, school projects, or projects.
            </li>
            <li>Explain things well and give yourself room to be interrupted in case people have questions. Get ready to be challenged.
            </li>
            <li>Be considerate of people’s time.
            </li>
            <li>Be emotionally intelligent, look at body language and eyes.
            </li>
            <li>Work with the interviewer, not against them.
            </li>
            <li>Interviews are a conversation more than an interrogation.
            </li>
            <li>Don’t be annoying (lmao me in my Uber interview).
            </li>
            <li>Smile.
            </li>
            <li>Be yourself, be humble.
            </li>
          </ul>
          <p>
            Being able to lead on a conversation with someone you know nothing
            about is great practice because in interviews, they see your resume
            and your resume tells a story. All you have to do is let them follow
            along as you read outloud.
          </p>
          <br />
        </GridItem>
        

        
      </GridContainer>
    </div>
  );
}
