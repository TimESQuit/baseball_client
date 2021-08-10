import React from "react";
import {
  Container,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet-async";

import TheStatsTable1 from "./TheStatsTable1";
import TheStatsTable2 from "./TheStatsTable2";
import StyledLink from "../../styles/StyledLink";

const useStyles = makeStyles((theme) => ({
  titleHeader: {
    padding: theme.spacing(3, 0, 1, 0),
  },
  section: {
    padding: theme.spacing(3, 0, 3, 0),
  },
  subTitle: {
    padding: theme.spacing(0, 0, 1, 0),
  },
  mutedText: {
    padding: theme.spacing(0, 0, 1, 0),
    fontWeight: 300,
  },
  statTable: {
    padding: theme.spacing(1, 0, 3, 0),
  },
  listItem: {
    display: "block",
  },
}));

const TheStats = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Stats Explanation</title>
      </Helmet>
      <article>
        <header>
          <Typography variant="h3" className={classes.titleHeader}>
            The Stats
          </Typography>
          <Typography variant="subtitle1" className={classes.mutedText}>
            An explanation of some of the non-traditional stats used on this
            site.
          </Typography>
        </header>

        <div>
          <section className={classes.section}>
            <Typography variant="h5" id="war_ex" className={classes.subTitle}>
              WAR
            </Typography>
            <Typography variant="subtitle1" className={classes.mutedText}>
              The most popular advanced stat.
            </Typography>
            <Typography paragraph>
              If you are unfamiliar with WAR, it stands for Wins Above
              Replacement and is a framework that combines all of a player's
              stats into one all-encompassing stat. WAR attempts to allows
              analysts and fans to compare different types of players with just
              one number. There are{" "}
              <StyledLink
                target="_blank"
                href="https://www.baseball-reference.com/about/war_explained.shtml"
              >
                multiple
              </StyledLink>{" "}
              ways of{" "}
              <StyledLink
                target="_blank"
                href="http://tangotiger.com/index.php/site/comments/how-to-create-war-for-any-sport/"
              >
                calculating
              </StyledLink>{" "}
              <StyledLink
                target="_blank"
                href="https://legacy.baseballprospectus.com/glossary/index.php?search=WARP"
              >
                WAR
              </StyledLink>
              , but for this site I have used{" "}
              <StyledLink
                target="_blank"
                href="https://library.fangraphs.com/misc/war/"
              >
                Fangraphs'
              </StyledLink>{" "}
              version of WAR, sometimes referred to as fWAR.
            </Typography>
            <Typography component="div">
              The most important things to know about WAR are:
              <List>
                <ListItem className={classes.listItem}>
                  There are typically two categories: Pitching & everything
                  else. <br />{" "}
                  <Typography variant="caption">
                    Note: the 'everything else' WAR is called 'Batting' WAR on
                    this site, but includes fielding & baserunning.
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  It measures a player's skill against a theoretical{" "}
                  <StyledLink
                    target="_blank"
                    href="https://library.fangraphs.com/misc/war/replacement-level/"
                  >
                    "replacement"
                  </StyledLink>{" "}
                  player, which by definition is worse than an "average" player.
                </ListItem>
                <ListItem className={classes.listItem}>
                  WAR is a{" "}
                  <StyledLink
                    target="_blank"
                    href="https://library.fangraphs.com/principles/counting-v-rate/"
                  >
                    counting stat
                  </StyledLink>
                  .
                </ListItem>
              </List>
              Some implications are:
              <List>
                <ListItem className={classes.listItem}>
                  Players can be below-average, but still be valuable to a team
                  by playing above "replacement" level.
                </ListItem>
                <ListItem className={classes.listItem}>
                  Because WAR is a counting stat, the more play-time a player
                  gets while performing above replacement level, the more WAR he
                  will accumulate.
                </ListItem>
                <ListItem className={classes.listItem}>
                  Average position players will accumulate around 2 WAR in a
                  full season.
                </ListItem>
                <ListItem className={classes.listItem}>
                  Pitchers occassionally have noticeable amounts of 'Batting'
                  WAR as part of their overall total value. An example is{" "}
                  <StyledLink target="_blank" href="/players/353">
                    Zack Greinke's
                  </StyledLink>{" "}
                  2013 season in which he acculumated 1.3 non-pitching WAR over
                  just 29 games and 72 PAs.
                </ListItem>
              </List>
              Basically: WAR {"\u2248"} [how good] x [total playing time]
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography variant="h5" id="war7_ex" className={classes.subTitle}>
              WAR7
            </Typography>
            <Typography paragraph>
              WAR7 is the total combined WAR of a player's 7 highest-WAR seasons
              (not necessarily consecutive). If a player has only 7 or fewer
              seasons, then it will be the same as their total career WAR. For
              retired & veteran players, this stat roughly represents the
              player's peak performance. WAR7 starts to bring out the difference
              between "peak" and "longevity."
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography variant="h5" id="fJAWS_ex" className={classes.subTitle}>
              fJAWS
            </Typography>
            <Typography paragraph>
              <StyledLink
                target="_blank"
                href="https://www.baseball-reference.com/about/jaws.shtml"
              >
                JAWS
              </StyledLink>{" "}
              (Jaffe WAR Score system) is an attempt to refine the perspective
              of WAR when looking at players' entire careers and whether they
              should be in the Hall of Fame. JAWS is the average of a player's
              career WAR and WAR7. This average is meant to be a basic balancing
              of a player's "peak" and "longevity." JAWS uses{" "}
              <StyledLink
                target="_blank"
                href="https://www.baseball-reference.com/about/war_explained.shtml"
              >
                Baseball Reference's
              </StyledLink>{" "}
              version of WAR. Because I use Fangraphs' version of WAR on this
              site, fJAWS is the same calculation as JAWS, just with Fangraphs'
              WAR instead of BBref.
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography
              variant="h5"
              id="warrate_ex"
              className={classes.subTitle}
            >
              WARr
            </Typography>
            <Typography paragraph>
              WARr stands for WAR-rate. For non-pitching WAR, the rate is per
              600 plate appearances. For pitching WAR, it is per 200 innings
              pitched. There are of course issues and limitations with choosing
              600 PAs and 200 IP. E.g. This makes for somewhat akward
              comparisons between starting pitchers and relievers as well as
              starting pitchers of the 21st century and starting pitchers from
              100+ years ago. However, the denominator (600 PAs/200 IP) itself
              is mostly irrelevant, as the respective rates between players
              would remain the same. I choose 600 PA and 200 IP mostly because
              they're round numbers and very roughly resemble a full season for
              starting players. WARr shows how well a player did during a season
              or for his career on a per PA or per IP basis. It helps in
              answering questions like "Who would you want to start in the 7th
              game of the World Series?" and "Who do you want at the plate in
              the bottom of the 9th?" WARr is a player's WAR-rate for their
              entire career.
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography
              variant="h5"
              id="war7rate_ex"
              className={classes.subTitle}
            >
              WAR7r
            </Typography>
            <Typography paragraph>
              WAR7r is the WARr for the total of a player's 7 highest-WAR
              seasons. Because WAR7 has a bit of a playing-time bias, WAR7r
              strips that away for a player's 'peak' seasons. A player may have
              a higher WAR7 because he had a lot of playing time during those
              years, while a better player could have the same or even lower
              WAR7 because of less playing time or injuries.
            </Typography>
            <Typography paragraph>Here's an example:</Typography>
            <Container maxWidth="lg" className={classes.statTable}>
              <TheStatsTable1 />
            </Container>
            <Typography paragraph>
              Pete Rose holds the record for most career MLB hits, plate
              appearances, games played and many other counting metrics that
              measure a player's longevity. However, this table compares his
              peak performance with Joey Votto's. Rose and Votto, both
              firstbasemen, have nearly identical WAR7 totals, meaning they both
              accrued the same amount of wins above replacement in their 7 best
              (non-consecutive) seasons. Rose, however, had more than 500
              additional PAs in his 7 best years than Votto in his 7 best.
              Because of this, Votto has a WAR7r more than .5 higher than Rose.
              This means that had Votto had the same number of PAs, he would
              have accumulated more value. In essence, Votto is preferable to
              Rose as an answer to the question "Who do you want at the plate in
              the bottom of the ninth?"
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography
              variant="h5"
              id="fJAWSrate_ex"
              className={classes.subTitle}
            >
              fJAWSr
            </Typography>
            <Typography paragraph>
              fJAWSr does for WAR-rate what fJAWS does for WAR totals. fJAWSr is
              an average of a player's career WARr and WAR7r. fJAWSr gives us a
              stat that balances a player's "peak" and "longevity" while
              weighting playing time less than fJAWS.
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography
              variant="h5"
              id="Otherstats_ex"
              className={classes.subTitle}
            >
              Others
            </Typography>
            <Typography paragraph>
              On individual player pages, you can see season values for wRC+,
              BsR, Off, Def, K/9, BB/9 and other stats. I don't really focus on
              any of these on this site, but they are shown to give you some
              idea at
              <i>how</i> a player reached his WAR total for a given year. wRC+
              is a rate stat designed to encapsulate everything a batter does at
              the plate and adjust it such that 100 is average and above 100 is
              above average. BsR, Off & Def are counting stats that go into the
              WAR calculation. BsR is net baserunning runs above average
              (including steals & first-to-thirds). Off represents all offensive
              runs above average, combining batting runs above average and BsR.
              Def is of course defensive runs saved above average and includes a
              positional adjustment (i.e. a SS with average defense is still
              more defensively valuable than a 1B with great defense).
            </Typography>
            <Typography paragraph>
              An example of how you might use these stats:
            </Typography>
            <Typography paragraph>
              Bryce Harper won MVP in 2015 on the back of an amazing year at the
              plate. Barry Bonds won his 3rd straight MVP in 2003 during a
              similiarly amazing offensive year. Here's how the 2 years compare.
            </Typography>
            <Container
              style={{ maxWidth: "1500px" }}
              className={classes.statTable}
            >
              <TheStatsTable2 />
            </Container>
            <Typography paragraph>
              Bonds and Harper put up similiarly outlandish wRC+ and Offensive
              Runs Above Average, but Bonds' defense graded out much better than
              Harper's. The difference in defensive value is the biggest reason
              Bonds had the slightly higher WAR. However, Bonds accumulated that
              WAR in 23 fewer games and 104 fewer PAs, so the players' are more
              separated on a per-game basis than their WAR totals show.
            </Typography>
          </section>
        </div>
      </article>
    </Container>
  );
};

export default TheStats;
