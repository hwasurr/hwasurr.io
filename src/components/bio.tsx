/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import { rhythm } from '../utils/typography';

function Bio(): JSX.Element {
  const data = useStaticQuery<Queries.BioQuery>(graphql`query Bio {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            gmail
          }
        }
      }
    }
`);
  const { author, social } = data.site!.siteMetadata;
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(1 / 2),
      }}
    >
      <Image
        fixed={data.avatar!.childImageSharp!.fixed! as any}
        alt={author!.name || undefined}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 75,
          minHeight: 75,
          borderRadius: '100%',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <div>
        <p style={{ margin: '0px 0px 8px' }}>
          Written by
          {' '}
          <Link
            to="https://portfolio.hwasurr.io"
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              fontFamily: 'DungGeunMo',
            }}
          >
            <strong>
              {author!.name}
              <span
                role="img"
                aria-label="name-thumb"
                style={{ display: 'inline-block' }}
                className="animated bounce infinite slower"
              >
                👍🏻
              </span>
            </strong>
          </Link>
          <br />
          {author!.summary}
        </p>

        <div style={{ display: 'flex' }}>
          {social!.github && (
            <a className="social" href={`https://github.com/${social!.github}`}>
              Github
            </a>
          )}
          {social!.gmail && (
            <a className="social" href={`mailto:${social!.gmail}`}>
              E-mail
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bio;
