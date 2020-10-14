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
            Introduction
          </h3>
          <p>
            Since it’s been about 6 months since COVID-19 and the national... statewide... countywide......
            or self-imposed quarantine and stay-at-home mandate started, I thought I would spend some time to reflect.
            This is particularly the case because I remember I wrote about part 1 of my 2019 Year-in-Review in early March
            then deferred on part 2 to talk about COVID-19... but it ended up lasting longer than I predicted and then the
            BLM movement happened, so I pushed back on any personal blog posts to try to divert my effort onto supporting the BLM movement.
            Now that things have settled down and all we can do is vote, donate to the proper campaigns and movements, and wait things out —
            I decided to just talk about what I’ve learned and how I want to grow on an individual-level or basis.
          </p>
          <p>
            I want to revisit the idea of individual improvement because I think as a nation, we all have a lot of things we need to work on
            before we can decide to disproportionately spend our time attempting to help others despite not having complete control of our own
            lives. This could mean learning more about ourselves, refining our morals / values, or simply picking up new hobbies.
          </p>
          <p>
            In this piece of writing, I’ll be talking about a short overview of my COVID-19 timeline and some things I learned along the way
            and realizations of what I personally need to work on. For the average person, my preference to spend time self-improving may
            come off as selfish... but to put it short, I don’t think it’s selfish to iron out my own flaws, world views, and perspectives
            to ensure that I don’t:
          </p>
          <ul>
            <li>project insecurities or traumatic experiences onto others, </li>
            <li>inhibit the happiness of anyone around me, </li>
            <li>nor prevent others from finding ways to learn and self-improve themselves. </li>
          </ul>
          <p>
            I'm writing this to be 100% vulnerable and transparent with both myself and anyone who might care.
          </p>
          <br />

          <h2 className={classes.title}>
            What I Want to Work On.
          </h2>

          <h3 className={classes.title}>
            Positivity & Optimism
          </h3>
          <p>
            I’m quite the alarmist and I tend to overthink situations and overreact a lot.
            When COVID hit I expected there to be riots due to the inability to uphold infrastructural demands.
            Now that the fed has pumped out several trillion in stimulus I have fears that the next global financial crisis
            is going to be really awful and widen the wealth gap even more. With the election I have a hunch that violence will
            ensue regardless of who wins or loses. I guess what I’ve come to the conclusion of is...
            I have very little faith and optimism in society to follow rules, be selfless, and love one another.
            This weariness is what keeps me from caring about a lot of things because I start to rationalize that everything is pointless.
          </p>
          <p>
            With this realization, I’d like to find ways to be more positive and optimistic of the future — both for myself and for others as well.
            This means I need to work on holding my tongue to keep my thoughts and opinions to myself.
            This is to ensure that I have time to think more thoroughly before I speak and to remain neutral as possible.
            This is important to me personally because I want to grow into a more reasonable, nuanced, attentive, empathetic, and happy individual that people can seek help and guidance from.
            I don’t want to be an off-putting, intimidating person because in the span of my entire life, I know I’m going to need the patience to deal with kids, stubborn adults, and sticky situations.
          </p>
          <p>
            It’s overall more healthy to be a more lighthearted and caring person anyways.
            Negativity bad. =) This also means I need to be less skeptical and questioning of everything.
          </p>
          <br />

          <h3 className={classes.title}>
            Discipline
          </h3>
          <p>
            Throughout my entire life I genuinely don’t think I’ve worked or tried as hard as I could have at any point in time.
            This applies to sports, school, work, etc. because one of my biggest fears is putting in a lot of effort, time, and dedication to <i><b>not  </b></i>
            reap maximum rewards or return. I’ve always made it a goal to put in the least amount possible while maximizing gains.
            This is quiet unhealthy as I’ve consistently justified my attitude or made excuses for myself that would prevent me from pushing
            towards my full potential. High school football coaches claimed I had a lot of potential but I never bothered to learn the playbooks
            or get contacts (I played blind) because “I had better things to study for and it’s not like I have a future in the NFL anyways.”
            My career and work mentors claim I have a lot of potential but I justify my lack of effort with “I work to live, not live to work.”
            In short, this kind of goes back to a very old piece I wrote where I quoted my mom telling me that “[I] always blame shortcomings
            on others and never take ownership of [my] own responsibilities.”
          </p>
          <p>
            What I’ve realized is that I’ve typically acted this way towards throughout my life because I felt both, too “good” for the obligation
            of trying harder, but at the same time I didn’t think I was good enough to compete with those who were genuinely always smarter and
            more motivated than I am.
            This is a toxic, negative, and inhibiting attitude I need to move away from because I really do want to put in the work and effort to be the
            best person I believe I can be, instead of selling myself short with routine excuses and justifications.
          </p>
          <p>
            As I write this I want to express in full transparency that I’m super lost.
            When I’m at work I get so overwhelmed with all these moving parts that I end up doing almost nothing.
            It’s really bad and it’s unhealthy — I can chop it down to mental health instability and move on with my
            life but I want to be able to confront these issues by slowing down and sorting out al my thoughts in order
            to solve problems one-at-a-time. My issue is that my mind is all over the place, I get distracted easily,
            and I get bored quickly. These are all signs of my lack of discipline.
          </p>
          <p>
            Life is short, our potential is time-sensitive, and no one is going to sit around waiting for any of us. I need to do better here.
          </p>
          <br />

          <h3 className={classes.title}>
            Time-Management & Sleep
          </h3>
          <p>
            Let’s face it. Sleep is important and I frankly don’t get enough of it because I’m busy thinking a million things at all times of the day.
            My head hurts, my brain hurts, my mind hurts, and I need to find ways to compartmentalize my time a lot better to ensure
            that I’m not mentally running off into the void or distracting myself with irrelevant activities or topics.
            Maybe I should actually use adderall for non-recreational use. There are 24 hours in a day and I don’t maximize a single part
            of it because I’m busy doing everything, and not finishing anything.
          </p>
          <br />

          <h3 className={classes.title}>
            Learning More
          </h3>
          <p>
            I’m in an extremely blessed situation where I have the free-time, opportunity, and environment to learn.
            This is important to me because if I’m not learning something new then I’m stagnating — the last thing I want in
            my life is to stagnate because I love being in a growth mindset, it keeps life fulfilling and engaging.
          </p>
          <p>
            At work I’m surrounded by extremely smart people (PhDs, Senior Engineers, Leaders in their Domain Area) and
            I don’t think I’m taking full advantage of this. I’m mostly just afraid of asking questions, being unknowledgeable, and
            lacking experience but I’ve come to realize that those around me are probably just as happy to help teach, guide,
            and mentor me as much as I’m happy to help others that need help in my life as well.
            I need to take advantage of my environment and learn more from those I spend 40 hours a week with. I miss the office.
          </p>
          <p>
            Outside of work I have tons of free time to read more, self-educate myself, and pick up new hobbies.
            I did a very good job at this in the beginning of quarantine because I went in thinking it’d be temporary,
            but as things grow more permanent and this lifestyle of working-from-home and remaining virtual is actually reality...
            I need to make the mental mind-shift into wanting to learn more.
          </p>
          <br />

          <h3 className={classes.title}>
            Time-Management & Sleep
          </h3>
          <p>
            I’m really bad at responding mostly because I lack the mental capacity to uphold text-based conversations while also lacking the
            attention span of being able to Facetime people 1-on-1 for extended periods of time. It’s an odd mental barrier that keeps me from
            maintaining communication channels with people, whether it be friends or potentials off of dating apps (more on this later).
            But I find myself not engaging as much as I wish I could, mostly because my shit time-management and discipline prevents me from
            being able to free up time blocks where I could fit in my friends and more social time during the week.
            This is particularly important to me because the less we see our friends in-person, the faster we forget about them.
            I don’t want to forget anyone so I want to do a better job keeping them in-the-loop.
          </p>
          <br />

          <h3 className={classes.title}>
            A Quick Conclusion
          </h3>
          <p>
            There are a lot of things I need to sort out and improve. I hope everyone has something they're working towards. You definitely
            don't have to be as critical as me though. Take your time if you need to.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
