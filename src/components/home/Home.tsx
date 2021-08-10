import React from "react";
import {
  Container,
  createStyles,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";

import StyledLink from "../../styles/StyledLink";
import HomeTable from "./HomeTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    titleHeader: {
      padding: theme.spacing(3, 0),
    },
    tableCaption: {
      padding: theme.spacing(0, 3),
    },
    specialPar: {
      padding: theme.spacing(3, 0, 0, 0),
    },
    listItem: {
      display: "block",
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" align="center" className={classes.titleHeader}>
        Tim's Baseball Thoughts
      </Typography>
      <article>
        <Typography variant="h4">Intro</Typography>
        <Typography paragraph>
          This site's main purpose is to shed a tiny bit of light on an area of
          baseball analysis that isn't discussed <i>quite</i> enough: rate
          stats. Yes, there are tons of rate stats, even going all the way back
          to batting average. However, while the introduction and development of{" "}
          <StyledLink href="/the-stats">WAR</StyledLink> has been extremely
          useful in better understanding the game, it isn't the perfect stat for
          all situations (not that it tries to be). My primary purpose of
          highlighting rate stats is within the context of a player's entire
          career, and whether they should be in the Hall of Fame - at least
          based on the player's on-field performance.
        </Typography>
        <Typography paragraph>
          In this vein, this site focuses on WAR rate stats. There are many ways
          to convert WAR totals into a rate. For starters, there are essentially
          an infinite number of denominators to choose from. To better
          understand what decisions I've made, and what WAR rate stats I use on
          this site, take a look at{" "}
          <StyledLink href="/the-stats">The Stats</StyledLink>.
        </Typography>
        <Typography variant="body1" component="span">
          Some caveats/drawbacks/problems with my approach:
          <List>
            <ListItem className={classes.listItem}>
              I have used{" "}
              <StyledLink href="https://www.fangraphs.com/">
                Fangraphs'
              </StyledLink>{" "}
              version of WAR. There are other versions, but of the ones that are
              most accessible, I like Fangraphs' version the best. Sometimes,
              however, different versions have noticeably different outcomes.
            </ListItem>
            <ListItem className={classes.listItem}>
              While the individual season WAR totals of each player are exactly
              the same as Fangraphs' official numbers, career WAR totals are
              sometimes very slightly off. This comes from Fangraphs keeping
              more precise WAR calculations than they show for each season. This
              typically results in at most a .2 or .3 difference for a player,
              which is nearly or completely meaningless within the context of a
              10+ year career.
            </ListItem>
            <ListItem className={classes.listItem}>
              This site has every player who ever played in the MLB, but it
              doesn't keep track of most traditional stats. And even for some of
              the stats is does track, it does not have the player's career
              totals/rates. This is in part because the primary focus of this
              site in on players' WAR and WAR rates and not other stats.
            </ListItem>
            <ListItem className={classes.listItem}>
              There is no perfect implementation of WAR. Even if there were, WAR
              rate stats would have additional problems of their own. For
              example, I chose to use a player's 7 highest-war seasons in the
              same way JAWS does (Confused? Look{" "}
              <StyledLink href="/the-stats">here</StyledLink>
              ), but it's not clear this is the best way to capture a player's
              peak rate ability while still accounting for playing time to some
              extent. Ideally, I would prefer to include something like a Wins
              Above Average as opposed to WAR, but this wouldn't completely
              solve the issue, and is not something I have yet calculated or
              otherwise found for Fangraphs' version of WAR.
            </ListItem>
          </List>
          There are many other potential problems and limitations when using WAR
          rate to judge a player's entire career - too many to list here.
          <br />
          However, I believe WAR rate to be an illuminating concept. See below
          for an example of why.
        </Typography>
      </article>
      <br />
      <article>
        <Typography variant="h4">Firstbasemen & Centerfielders</Typography>
        <Typography paragraph>
          As of the 2021 Hall of Fame Ballot, 21 1Bs and 19 CFs have been
          enshrined. While this may seem fine, it has been difficult of late for
          a few CFs to gain traction, despite having extremely successful
          careers. We'll compare 2 HOF 1Bs & 2 non-HOF CFs.
        </Typography>

        <HomeTable />

        <Typography variant="caption" className={classes.tableCaption}>
          1B: Killebrew & Perez, CF: Edmonds & Jones
        </Typography>
        <Typography paragraph className={classes.specialPar}>
          Because WAR doesn't care what position a player plays, just the value
          they provide, WAR and WAR rate are some of the best comparison tools
          available to compare players at different positions. 1Bs typically hit
          better than CFs, but that doesn't mean they necessarily provide more
          value. Looking at total WAR, we see that Killebrew, Edmonds, and Jones
          are all nearly identical, while Perez is a little lower. Looking at
          WAR7, we can see that Edmonds and Jones provided more value in their
          peak years than the firstbasemen. On top of this, Edmonds and Jones
          accrued many fewer plate appearances and fewer seasons played. WARr
          shows the large disparity between the CFs and 1Bs in how much value
          they provided per plate appearance. Longevity does and should matter
          for a player's Hall-of-Fame worthiness. However, a player's ability to
          pile on additional average or below average seasons at the end of
          their career shouldn't be helping their HoF case.
        </Typography>
        <Typography paragraph>
          These hand-picked players aren't fully representative of all
          Hall-of-Fame disparities. However, I chose these four not because I
          think Killebrew or Perez shouldn't be in the Hall, but because Jim
          Edmonds only received{" "}
          <StyledLink href="https://www.baseball-reference.com/awards/hof_2016.shtml">
            2.5%
          </StyledLink>
          (!!) of the vote on his first ballot before being automatically
          dropped from further consideration. This is without any major
          character flaw or other off-the-field concerns I'm aware of. Jones is
          still on the ballot, but has so far only reached as high as{" "}
          <StyledLink href="https://www.baseball-reference.com/awards/hof_2021.shtml">
            33.9%
          </StyledLink>{" "}
          on the 2021 ballot. It seems like Edmonds and Jones should definitely
          be in the Hall, based on who is already in it. They were some of the
          best centerfielders to ever play, and just because they didn't
          accumulate quite as many counting stats as others, doesn't mean they
          should be kept out.
        </Typography>
      </article>
    </Container>
  );
};

export default HomePage;
