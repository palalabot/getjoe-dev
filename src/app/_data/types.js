// Shared JSDoc types for the content in `_data/`. Checked by `pnpm typecheck`.
// This file only holds type definitions, so it exports nothing at runtime.

/**
 * @typedef {object} Project
 * @property {"project" | "hobby"} category "project" for sites with a link to visit, "hobby" for interests and side pursuits.
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string} [link] Internal path ("/bayanihan") or full external URL. Omit when there is nothing to link to.
 */

/**
 * @typedef {object} Service
 * @property {string} title
 * @property {string} text
 * @property {string} subject Example subject shown as the contact form placeholder.
 */

/**
 * @typedef {object} ResumeLink
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {object} SkillGroup
 * @property {string} category
 * @property {string[]} items
 */

/**
 * @typedef {object} Job
 * @property {string} company
 * @property {string} role
 * @property {string} start
 * @property {string} end "Present" for the current job.
 * @property {string[]} highlights
 * @property {string[]} skills
 */

/**
 * @typedef {object} Education
 * @property {string} degree
 * @property {string} school
 */

/**
 * One step of the career path on the homepage, oldest first.
 * @typedef {object} BackgroundStep
 * @property {string} title
 * @property {string} [period] Only when the years are known.
 * @property {string} text
 */

/**
 * Shape of `resume.json`. It is served publicly, so no phone or home address.
 * @typedef {object} Resume
 * @property {string} name
 * @property {string} title
 * @property {string} location
 * @property {string} email
 * @property {ResumeLink[]} links
 * @property {string} summary
 * @property {SkillGroup[]} skills
 * @property {Job[]} experience
 * @property {string} earlier
 * @property {BackgroundStep[]} background Shown on the homepage, not on the one-page resume.
 * @property {Education[]} education
 * @property {string[]} speaking
 */

export {};

/**
 * @typedef {object} BlogPost
 * @property {string} slug URL part: /blog/<slug>.
 * @property {string} title
 * @property {string} description One sentence for the list and the meta description (under 155 characters).
 * @property {string} date Publish date: YYYY-MM-DD, or YYYY-MM when only the month is known.
 * @property {string[]} tags
 * @property {(string | {heading: string} | {code: string, label?: string} | {callout: string})[]} body In order. A string is a paragraph (`backticks` make inline code, [text](url) a link), `heading` an h2, `code` a code block, `callout` a highlighted paragraph.
 */
