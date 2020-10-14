import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
import Table from "components/Table/Table.js";
// core components


import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

export default function Tables() {
  const classes = useStyles();
  return (
    <Table
      striped
      tableHead={["#", "Stance", "What", "Why"]}
      tableData={[
        [
          "14",
          "Yes",
          "Issue $5.5 billion in bonds for projects and to conduct research, trials, and programs related to stem cells.",
          "We love stem cell research. We need more medical innovation as existing health care is expensive and only technological or operational advances/efficiencies can lower the cost of what goes into health care. Bonds are also cheap right now so it's a good time to issue bonds to fund long-term future-proofing projects",
        ],
        [
          "15",
          "No",
          "Voting in favor of Prop 15 would require commercial properties to be taxed based on their market value rather than purchase price.",
          "Protect small businesses and don't increase financial burdens on consumers. I am extremly against increasing taxes on properties because that in theory decreases margins for businesses run on commercial properties. This will hurt small businesses because in order to retain their margins or existing dividends, businesses will likely pass on the financial burden to consumers as they can't afford to stay afloat. If wages don't increase this is a net loss for consumers across California or lead to inflation. I think we need to be keeping money out of the government because of inherent ineptitude until they figure out how to properly allocate tax dollars.. those monkeys don't know economics. Keep annual increases at the target 2% inflation rate."
        ],
        [
          "16",
          "--",
          "Currently, Affirmative Action within California is banned (discrimination and preferential treatment) for public entities. Prop 16 if passed will repeal Prop 209 which means that California will now allow for race-based or sex-based preferences in California",
          "As much as I support the idea of Affirmative Action, which is allowing people or entities to give preferential treatment to specific races, sexes, or people. \
            I'm mostly afraid that when we give power to average or normal people to make decisions on behalf of others' lives, careers, or education, we have to rely on the \
            idea of good faith or trust in that people will carry out these policies in effective, helpful ways. I personally don't want to give people the power to be able to \
            discriminate or offer preferential treatment for specific racial groups because this allows people to also give preferential treatment to their own ethnic groups (e.g. Indian, Asian, White) \
            and can honestly make the racial inequality worse in California. Repealing Prop 209 gives more power to the ruling classes and those who hold the most wealth. Double-edged sword. \
            Continue banning Affirmative Action and maintain status quo. The data says otherwise though that since Affirmative Action was banned, only representation for whites and asians increased at the expense of underrepresented minorities -- \
            which personally I'm not okay with (because I want more minority representation) but I do have more doubts and worries than trust that this legislation will be executed well. Voting yes or no on this depends on your specific world view. I'm okay with it going either way to be honest"
        ],
        [
          "17",
          "Yes",
          "Allow people with felonies while on parole to vote.",
          "I see that this Proposition is an effort to get more 'democratic' voters to vote in favor of 'democratic' policies and politicians. It is also quite difficult to be a felon in California so my stance on this is No, because I already think 90% of the population is unfit to vote regardless of their Criminal History Background. However, I've \
          been presented with the following statement: 'It's not a democrat power grab, it's about restoring rights to people who are in all other ways reintegrated into society (including paying taxes). The justice system is supposed to be reformative, not punitive.' which convinced me to switch my vote from No to Yes. Also support democracy"
        ],
        [
          "18",
          "No",
          "Allow 17 year olds to vote if they will be 18 at the time of the next general election.",
          "yea na i aint tryna have no kid vote high key",
        ],
        [
          "19",
          "No",
          "Voting for this proposition allows homeowners to \n" +
            "1) transfer existing tax assessments to more expensive homes with upward adjustment \n" +
            "2) Allows those over 55 to transfer tax assessments 3 times (from 1) \n" +
            "3) Inherited homes should be reassessed at market value \n",
          "Proposition 90 already allows tax transfers within counties (e.g. San Diego County, LA County, Santa Clara County) which we already want to live in... all this proposition essentially does is try to find methods to displace people who can no longer afford to live here by reassessing the property tax on inherited homes and financially forcing people who grew up in areas with high real estate values to move out. I'm a huge advocate for generational wealth."
        ],
        [
          "20",
          "Yes",
          "Previously, specific types of theft and fraudulent crimes were misdemeanors but now they could be felonies. It would also require DNA samples for state and federal databases for criminals involved with domestic violence, prostitution with a minor, and other heinous crimes. ",
          "This proposition may indirectly increase the state's prison inmate population which might be a bad thing considering prisons are privately-owned and ran. There needs to be more detterents to prevent people from stealing because stealing is quite ubiquitous in our society since the punishments aren't severe. I don't have much to say here tbh.",
        ],
        [
          "21",
          "Yes",
          "Allows local governments to enact rent control on housing that was first occupied over 15 years ago (older homes) except people who own 2 or less homes.",
          "I think this is important because as housing prices and rent costs sky-rocket in more populous areas like the Bay Area and LA County, there is a greater need for rent control in order to prevent homogenous societies from forming. We still need service workers, trade jobs, and other people to do the non-white collar work. Even though Rent Control would lower tax revenue, I don't trust our local government entities to allocate the money towards the right support programs to help people who are being displaced, so I prefer more power to the average individual with things like rent control, UBI, etc. This ballot helps fix some of the housing crisis problems California is facing"
        ],
        [
          "22",
          "--",
          "Defines app-based and delivery drivers as independent contractors to adopt labor / wage policies specific to app-based drivers and companies.",
          "Lol these drivers are fucked either way whether it be short-term or long-term I'm not voting here because I feel immoral with either vote. Keeping these jobs around and advocating for contract worker benefits is beneificial in the short-term because with COVID eliminating tons of different low(er) skill jobs, gig jobs inherntly widen the wage, wealth, and skill gap by continuing to have people rely on gig / short-term contract work for a living. This will also pass on the financial burden to consumers which I personally don't mind since I consider it an indirect tax, however it's likely that these companies will end up with lower margins and dividends, causing them to cut more workers in the end. Seems like a net-negative in the 10-15 year horizon. \
          On the other hand, if we support Uber and Lyft to continue shafting people into driving for them then we maintain status quo, however this is a slippery slope because it can fuck up labor laws across the country (quite possibly internationally) so I dont know how to feel about that either. Im neutral on this one",
        ],
        [
          "23",
          "Yes",
          "Require dialysis clinics to have on-site physicians, report data on infections, obtain consent from state health departments before closing a clinic, and not discriminate against patients based on source of payment",
          "Pretty self-explanatory proposition. I vote Yes because I personally want to make good health care as available and accessible as possible. Also I want to protect as many patients as possible, this proposition helps with both of those."
        ],
        [
          "24",
          "Yes",
          "Expand data privacy laws",
          "This proposition would hurt my bottom line since I work at Facebook but I think although I probably wouldn't fall victim to giving people too much data, I don't want public or private entities to house too much data anyways. I want to do away with companies like Equifax, Transunion, etc. so this is a step in the right direction in terms of data privacy.",
        ],
        [
          "25",
          "Yes",
          "Replace cash bails with risk assessments for detained suspects awaiting trials",
          "I think cash bails are unfair because a lot of people don't have savings or money to post bail, also deferring to a risk assessment allows for more nuanced decisions to be made for detainees. Interested to see the statistics on how Risk-Levels are imposed as there are probably implicit racial biases within the policing / court system."
        ]
      ]}
      customCellClasses={[
        classes.textCenter,
        classes.padding0,
        classes.textRight,
        classes.textRight
      ]}
      customClassesForCells={[]}
      customHeadCellClasses={[
        classes.textCenter,
        classes.textRight,
        classes.textRight
      ]}
      customHeadClassesForCells={[]}
    />
  );
}
